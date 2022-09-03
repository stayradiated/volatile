import type { Kanye } from '@volatile/kanye'
import { kanye, getResponseBodyJson } from '@volatile/kanye'
import type * as z from 'zod'

import { createSignedBody } from './signature.js'
import { withNonce } from './nonce.js'
import type { Config } from './types.js'

const prefixUrl = 'https://api.independentreserve.com/'

const buildSearchParameters = (
  input: Record<string, string | number | boolean>,
): URLSearchParams => {
  const searchParameters = new URLSearchParams()
  for (const [key, value] of Object.entries(input)) {
    searchParameters.set(key, String(value))
  }

  return searchParameters
}

const get = async (
  endpoint: string,
  searchParameters?: Record<string, string | number | boolean>,
): Promise<Kanye | Error> => {
  return kanye(prefixUrl + endpoint, {
    method: 'GET',
    searchParams: searchParameters
      ? buildSearchParameters(searchParameters)
      : undefined,
  })
}

const post = async (
  config: Config,
  endpoint: string,
  parameters: Record<string, undefined | string | number>,
): Promise<Kanye | Error> => {
  return withNonce(config.apiKey, async (nonce) => {
    const signedBody = createSignedBody({ config, endpoint, parameters, nonce })

    return kanye(prefixUrl + endpoint, {
      method: 'POST',
      body: JSON.stringify(signedBody),
      headers: {
        'content-type': 'application/json',
      },
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
