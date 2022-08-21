import { kanye } from '@volatile/kanye'

import type { Config } from './types.js'

const prefixUrl = 'https://openexchangerates.org/api/'

const appIdKey = 'app_id'

const get = async (
  config: Config,
  endpoint: string,
  searchParameters?: Record<string, string | number>,
) => {
  const result = await kanye(endpoint, {
    prefixUrl,
    searchParams: {
      [appIdKey]: config.appId,
      ...searchParameters,
    },
    redact: [config.appId],
  })

  return result
}

export { get }
