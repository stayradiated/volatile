import type { Config } from './types.js'

const isValidConfig = (config: Record<string, string>): config is Config =>
  typeof config === 'object' &&
  config !== null &&
  typeof config['appId'] === 'string'

export { isValidConfig }
