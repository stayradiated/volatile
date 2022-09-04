import type { Kanye } from '@volatile/kanye'
import { kanye, getResponseBodyJson } from '@volatile/kanye'
import type * as z from 'zod'
import { errorBoundarySync } from '@stayradiated/error-boundary'

import type { Config, DassetApiErrorBody } from './types.js'
import { dassetApiErrorBodySchema } from './schemas.js'
import { ApiError } from './error.js'
import { buildHeaders } from './build-headers.js'

const prefixUrl = 'https://api.dassetx.com/api/'

const getDassetApiErrorBody = (
  responseBody: string,
): DassetApiErrorBody | void => {
  const result = errorBoundarySync(() => {
    return dassetApiErrorBodySchema.parse(JSON.parse(responseBody))
  })
  if (result instanceof Error) {
    return undefined
  }

  return result
}

const getResponseBody = <Z extends z.ZodType<unknown, any, unknown>>(
  raw: Kanye,
  schema: Z,
): z.infer<Z> | Error => {
  if (raw.responseBody) {
    const dasetApiErrorBody = getDassetApiErrorBody(raw.responseBody)
    if (dasetApiErrorBody) {
      return new ApiError(dasetApiErrorBody, { cause: raw.error })
    }
  }

  const responseBody = getResponseBodyJson(raw)
  if (responseBody instanceof Error) {
    return responseBody
  }

  const result = schema.safeParse(responseBody)
  if (!result.success) {
    return result.error
  }

  return responseBody
}

type RequestOptions = {
  config: Config
  method: 'GET' | 'POST' | 'DELETE'
  endpoint: string
  body?: unknown
  searchParams?: URLSearchParams | Record<string, string>
}

const request = async (options: RequestOptions): Promise<Kanye | Error> => {
  const { config, method, endpoint, body, searchParams } = options
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const raw = await kanye(prefixUrl + endpoint, {
    headersTimeout: 15_000,
    bodyTimeout: 15_000,
    redact: [config.accountId, config.apiKey],
    method,
    headers: body
      ? headers
      : { ...headers, 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
    searchParams,
  })

  return raw
}

export { getResponseBody, request }
