import fs from 'fs/promises'
import { Config } from '@stayradiated/kiwi-coin-api'

type Argv<T extends Record<string, unknown>> = T & {
  config?: string
}

type HandlerFn<T extends Record<string, unknown>> = (
  config: Config,
  argv: Argv<T>,
) => Promise<void>

const withConfig = <T extends Record<string, unknown>>(
  handlerFn: HandlerFn<T>,
) => {
  return async (options: Argv<T>) => {
    const { config: configPath } = options
    if (!configPath) {
      throw new Error('--config is required!')
    }

    const configJSON = await fs.readFile(configPath, 'utf8')
    const config = JSON.parse(configJSON) as Config

    if (!config.userId) {
      throw new Error('Config file is missing "userId".')
    }

    if (!config.apiKey) {
      throw new Error('Config file is missing "appKey".')
    }

    if (!config.apiSecret) {
      throw new Error('Config file is missing "appSecret".')
    }

    return handlerFn(config, options)
  }
}

export default withConfig
