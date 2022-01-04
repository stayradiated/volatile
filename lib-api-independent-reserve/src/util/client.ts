import { kanye, Kanye, getResponseBodyJSON } from '@volatile/kanye'

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
      redact: [config.apiKey, config.apiSecret]
    })
  })
}

const getResponseBody = getResponseBodyJSON

export { get, post, getResponseBody }
