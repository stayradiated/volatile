import fs from 'fs/promises'
import { Config as KiwiCoinConfig } from '@stayradiated/kiwi-coin-api'
import { Config as CoinMarketCapConfig } from '@stayradiated/coin-market-cap'

type ExchangeRateConfig = {
  appId: string
}

type JSONConfig = {
  'kiwi-coin.com'?: KiwiCoinConfig
  'openexchangerates.org'?: ExchangeRateConfig
  'coinmarketcap.com'?: CoinMarketCapConfig
}

export type Config = {
  kiwiCoin: KiwiCoinConfig
  exchangeRate: ExchangeRateConfig
  coinMarketCap: CoinMarketCapConfig
}

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
  return async (argv: Argv<T>) => {
    const { config: configPath } = argv
    if (!configPath) {
      throw new Error('--config is required!')
    }

    const configString = await fs.readFile(configPath, 'utf8')
    const configJSON = JSON.parse(configString) as JSONConfig

    const kiwiCoinConfig = configJSON['kiwi-coin.com']
    if (!kiwiCoinConfig) {
      throw new Error('Config file is missing "kiwi-coin.com" section.')
    }

    if (!kiwiCoinConfig.userId) {
      throw new Error('Config file is missing "kiwi-coin.com"."userId".')
    }

    if (!kiwiCoinConfig.apiKey) {
      throw new Error('Config file is missing "kiwi-coin.com"."appKey".')
    }

    if (!kiwiCoinConfig.apiSecret) {
      throw new Error('Config file is missing "kiwi-coin.com"."appSecret".')
    }

    const exchangeRateConfig = configJSON['openexchangerates.org']
    if (!exchangeRateConfig) {
      throw new Error('Config file is missing "openexchangerates.org" section.')
    }

    if (!exchangeRateConfig.appId) {
      throw new Error('Config file is missing "openexchangerates.org"."appId".')
    }

    const coinMarketCapConfig = configJSON['coinmarketcap.com']
    if (!coinMarketCapConfig) {
      throw new Error('Config file is missing "coinmarketcap.com" section.')
    }

    if (!coinMarketCapConfig.apiKey) {
      throw new Error('Config file is missing "coinmarketcap.com"."apiKey".')
    }

    return handlerFn(
      {
        kiwiCoin: kiwiCoinConfig,
        exchangeRate: exchangeRateConfig,
        coinMarketCap: coinMarketCapConfig,
      },
      argv,
    ).catch((error) => {
      console.error(error)
    })
  }
}

export default withConfig
