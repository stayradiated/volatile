import type { Kanye } from '@volatile/kanye'
import { kanye, getResponseBodyJson } from '@volatile/kanye'
import type * as z from 'zod'

import { createSignedBody } from './signature.js'
import { withNonce } from './nonce.js'
import type { Config } from './types.js'

const prefixUrl = 'https://api.independentreserve.com/'

const get = async (
  endpoint: string,
  searchParameters?: Record<string, string | number>,
): Promise<Kanye | Error> => {
  return kanye(endpoint, {
    method: 'GET',
    prefixUrl,
    searchParams: searchParameters,
  })
}

const post = async (
  config: Config,
  endpoint: string,
  parameters: Record<string, undefined | string | number>,
): Promise<Kanye | Error> => {
  return withNonce(config.apiKey, async (nonce) => {
    const signedBody = createSignedBody({ config, endpoint, parameters, nonce })

    return kanye(endpoint, {
      method: 'POST',
      prefixUrl,
      json: signedBody,
      redact: [config.apiKey, config.apiSecret],
    })
  })
}

const getResponseBody = <Z extends z.ZodType<unknown, any, unknown>>(
  raw: Kanye,
  schema: Z,
): z.infer<Z> | Error => {
  const responseBody = getResponseBodyJson<z.infer<Z>>(raw)
  if (responseBody instanceof Error) {
    return responseBody
  }

  const result = schema.safeParse(responseBody)
  if (!result.success) {
    return result.error
  }

  return result.data
}

export { get, post, getResponseBody }
