import type { Config } from './types.js'

const isValidConfig = (config: Record<string, string>): config is Config =>
  typeof config === 'object' &&
  config !== null &&
  typeof config['apiKey'] === 'string' &&
  typeof config['accountId'] === 'string'

export { isValidConfig }
