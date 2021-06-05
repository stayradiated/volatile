import { Config } from '@stayradiated/kiwi-coin-api'
import fs from 'fs/promises'

type Argv<T extends {}> = T & {
  config?: string,
}

type HandlerFn<T extends {}> = (config: Config, argv: Argv<T>) => Promise<void>

const withConfig = <T>(handlerFn: HandlerFn<T>) => {
  return async (options: Argv<T>) => {
    const { config: configPath } = options
    if (!configPath) {
      throw new Error('--config is required!')
    }

    const configJSON = await fs.readFile(configPath, 'utf8')
    const config = JSON.parse(configJSON)

    if (!config.userId) {
      throw new Error('Config file is missing "userId".')
    }
    if (!config.apiKey) {
      throw new Error('Config file is missing "appKey".')
    }
    if (!config.apiSecret) {
      throw new Error('Config file is missing "appSecret".')
    }

    handlerFn(config, options)
  }
}

export default withConfig
