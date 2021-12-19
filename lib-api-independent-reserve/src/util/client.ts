import ky from 'ky-universal'
import type KyInstance from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'
import createLimitFunction, { LimitFunction } from 'p-limit'

import { createSignedBody } from './signature.js'
import { NetError, getCause } from './error.js'
import type { Config } from './types.js'

const MAP_API_KEY_LIMIT_FN = new Map<string, LimitFunction>()

const waitForApiKey = (apiKey: string): Promise<void> => {
  if (MAP_API_KEY_LIMIT_FN.has(apiKey) === false) {
    MAP_API_KEY_LIMIT_FN.set(apiKey, createLimitFunction(1))
  }
  const limitFn = MAP_API_KEY_LIMIT_FN.get(apiKey)!
  return limitFn(() => undefined)
}

const log = debug('independent-reserve-api')

const client: typeof KyInstance = ky.create({
  prefixUrl: 'https://api.independentreserve.com/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(`∙ ${request.method.slice(0, 3)} ${request.url}`)
      },
    ],
    afterResponse: [
      (request) => {
        log(`✓ ${request.method.slice(0, 3)} ${request.url}`)
      },
    ],
  },
})

const get = async (
  endpoint: string,
  searchParameters?: Record<string, string | number>,
) => {
  const result = errorBoundary(async () =>
    client
      .get(endpoint, {
        searchParams: searchParameters,
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Received error from GET https://api.independentreserve.com/${endpoint}`,
      cause: await getCause(result),
      context: searchParameters,
    })
  }

  return result
}

const post = async (
  config: Config,
  endpoint: string,
  parameters: Record<string, undefined | string | number>,
) => {
  await waitForApiKey(config.apiKey)

  const result = await errorBoundary(async () =>
    client
      .post(endpoint, {
        json: createSignedBody({
          config,
          endpoint,
          parameters,
        }),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Received error from POST https://api.independentreserve.com/${endpoint}`,
      cause: await getCause(result),
      context: parameters,
    })
  }

  return result
}

export { client, get, post }
