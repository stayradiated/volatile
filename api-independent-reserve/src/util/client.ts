import ky from 'ky-universal'
import type KyInstance from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import { createSignedBody } from './signature.js'
import { NetError, getCause } from './error.js'
import type { Config } from './types.js'

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
