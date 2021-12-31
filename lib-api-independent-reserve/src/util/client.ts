import {
  kanye,
  Kanye,
  getResponseBody as getKanyeResponseBody,
} from '@volatile/kanye'
import { errorBoundary } from '@stayradiated/error-boundary'

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
    })
  })
}

const getResponseBody = <ResponseBody>(raw: Kanye): ResponseBody | Error => {
  const responseBodyText = getKanyeResponseBody(raw)
  if (responseBodyText instanceof Error) {
    return responseBodyText
  }

  const responseBody = errorBoundary(() => {
    return JSON.parse(responseBodyText) as ResponseBody
  })
  if (responseBody instanceof Error) {
    return responseBody
  }

  return responseBody
}

export { get, post, getResponseBody }
