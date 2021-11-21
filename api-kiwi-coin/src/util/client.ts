import { HTTPError } from 'ky'
import ky from 'ky-universal'
import type KyClient from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, APIError } from './error.js'
import { createSignedBody } from './signature.js'
import { isAPIErrorBody } from './is-api-error-body.js'
import type { Config } from './types.js'

const log = debug('kiwi-coin-api')

const client: typeof KyClient = ky.create({
  prefixUrl: 'https://kiwi-coin.com/api/',
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

const getCause = async (error: Error): Promise<Error> => {
  if (error instanceof HTTPError) {
    return errorBoundary(async () => {
      const context = await error.response.text()
      return new APIError({
        message: context,
      })
    })
  }

  return error
}

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
      message: `Received error from GET https://kiwi-coin.com/api/${endpoint}`,
      cause: await getCause(result),
      context: searchParameters,
    })
  }

  return result
}

const post = async <Result>(
  config: Config,
  endpoint: string,
  parameters?: Record<string, string>,
): Promise<Result | Error> => {
  const body = createSignedBody(config, endpoint, parameters)
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary(async () =>
    client.post(endpoint, { body }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Received error from POST https://kiwi-coin.com/api/${endpoint}`,
      cause: await getCause(result),
      context: parameters,
    })
  }

  if (isAPIErrorBody(result)) {
    return new APIError({
      message: `Received error from POST https://kiwi-coin.com/api/${endpoint}`,
      context: {
        result,
      },
    })
  }

  return result
}

export { client, get, post }
