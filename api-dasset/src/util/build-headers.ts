import { isValidConfig } from './is-valid-config.js'
import type { Config } from './types.js'

const buildHeaders = (config: Config): Record<string, string> | Error => {
  if (!isValidConfig(config)) {
    return new Error('dasset: config is invalid')
  }

  const { apiKey, accountId } = config
  return {
    'x-api-key': apiKey,
    'x-account-id': accountId,
  }
}

export { buildHeaders }
