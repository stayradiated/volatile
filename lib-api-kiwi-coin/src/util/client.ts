import type { Kanye } from '@volatile/kanye'
import { kanye, getResponseBodyJson, ApiError } from '@volatile/kanye'

import { createSignedBody } from './signature.js'
import { isApiErrorBody } from './is-api-error-body.js'
import { serial } from './serial.js'
import type { Config } from './types.js'

const prefixUrl = 'https://kiwi-coin.com/api/'

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
  parameters?: Record<string, string>,
): Promise<Kanye | Error> => {
  const requestBody = createSignedBody(config, endpoint, parameters)
  if (requestBody instanceof Error) {
    return requestBody
  }

  return serial(config.userId, async () => {
    return kanye(endpoint, {
      method: 'POST',
      prefixUrl,
      body: requestBody,
      redact: [config.userId, config.apiKey, config.apiSecret],
    })
  })
}

const getResponseBody = <T>(input: Kanye): T | Error => {
  const responseBodyJson = getResponseBodyJson<T>(input)

  if (isApiErrorBody(responseBodyJson)) {
    return new ApiError({
      message: `Received error from ${input.method} ${input.url}`,
      context: {
        ...input,
        responseBodyJson,
      },
    })
  }

  return responseBodyJson
}

export { get, post, getResponseBody }
