import type { Kanye } from '@volatile/kanye'
import { kanye, getResponseBodyJson } from '@volatile/kanye'

import type { Config, DassetApiError } from './types.js'
import { ApiError } from './error.js'
import { buildHeaders } from './build-headers.js'

const prefixUrl = 'https://api.dassetx.com/api/'

const isDassetApiError = (
  responseBody: unknown,
): responseBody is DassetApiError => {
  if (typeof responseBody === 'object' && responseBody !== null) {
    const responseBodyObject = responseBody as Record<string, unknown>
    return (
      typeof responseBodyObject['status'] === 'number' &&
      responseBodyObject['type'] === 'string' &&
      responseBodyObject['code'] === 'number' &&
      responseBodyObject['message'] === 'string'
    )
  }

  return false
}

const getResponseBody = <T>(raw: Kanye): T | Error => {
  const responseBody = getResponseBodyJson<T>(raw)
  if (responseBody instanceof Error) {
    if (isDassetApiError(responseBody)) {
      return new ApiError(responseBody.message, {
        apiErrorBody: responseBody,
      })
    }

    return responseBody
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

const get = async (
  config: Config,
  endpoint: string,
): Promise<Kanye | Error> => {
  return request({ config, method: 'GET', endpoint })
}

export { prefixUrl, getResponseBody, request, get }
