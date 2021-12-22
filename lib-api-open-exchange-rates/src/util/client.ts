import ky from 'ky-universal'
import type KyInstance from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, getCause } from './error.js'
import type { Config } from './types.js'

const log = debug('independent-reserve-api')

const baseUrl = 'https://openexchangerates.org/api/'

const redactUrl = (url: string) =>
  url.replace(/\?app_id=[^&]+/, '?app_id=[redacted]')

const client: typeof KyInstance = ky.create({
  prefixUrl: baseUrl,
  hooks: {
    beforeRequest: [
      (request) => {
        log(`∙ ${request.method.slice(0, 3)} ${redactUrl(request.url)}`)
      },
    ],
    afterResponse: [
      (request) => {
        log(`✓ ${request.method.slice(0, 3)} ${redactUrl(request.url)}`)
      },
    ],
  },
})

const get = async (
  config: Config,
  endpoint: string,
  searchParameters?: Record<string, string | number>,
) => {
  const result = await errorBoundary(async () =>
    client
      .get(endpoint, {
        searchParams: {
          app_id: config.appId,
          ...searchParameters,
        },
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Received error from GET ${baseUrl}${endpoint}`,
      cause: await getCause(result),
      context: searchParameters,
    })
  }

  return result
}

export { client, get }
