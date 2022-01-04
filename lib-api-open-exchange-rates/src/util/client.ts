import { kanye } from '@volatile/kanye'

import type { Config } from './types.js'

const prefixUrl = 'https://openexchangerates.org/api/'

// TODO: what's the best way to redact logs with kanye?
// const redactUrl = (url: string) => url.replace(/\?app_id=[^&]+/, '?app_id=[redacted]')

const get = async (
  config: Config,
  endpoint: string,
  searchParameters?: Record<string, string | number>,
) => {
  const result = await kanye(endpoint, {
    prefixUrl,
    searchParams: {
      app_id: config.appId,
      ...searchParameters,
    },
  })

  return result
}


export { get }
