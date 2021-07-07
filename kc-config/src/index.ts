import fs from 'fs/promises'
import { Config as KiwiCoinConfig } from '@stayradiated/kiwi-coin-api'
import {
  CoinMarketCapConfig,
  OpenExchangeRatesConfig,
  DassetConfig,
} from '@stayradiated/market-price'

type JSONConfig = {
  'kiwi-coin.com': KiwiCoinConfig
  'openexchangerates.org': OpenExchangeRatesConfig
  'coinmarketcap.com': CoinMarketCapConfig
  'dassetx.com': DassetConfig
}

type Config = {
  kiwiCoin: KiwiCoinConfig
  openExchangeRates: OpenExchangeRatesConfig
  coinMarketCap: CoinMarketCapConfig
  dasset: DassetConfig
}

const parseConfig = (configString: string): Config | Error => {
  const configJSON = JSON.parse(configString) as JSONConfig

  const kiwiCoinConfig = configJSON['kiwi-coin.com']
  const openExchangeRatesConfig = configJSON['openexchangerates.org']
  const dassetConfig = configJSON['dassetx.com']
  const coinMarketCapConfig = configJSON['coinmarketcap.com']

  const errorMessages = [
    !kiwiCoinConfig?.userId && '- "kiwi-coin.com".userId',
    !kiwiCoinConfig?.apiKey && '- "kiwi-coin.com".apiKey',
    !kiwiCoinConfig?.apiSecret && '- "kiwi-coin.com"."apiSecret"',

    !openExchangeRatesConfig?.appId && '- "openexchangerates.org".appId',

    !coinMarketCapConfig?.apiKey && '- "coinmarketcap.com".apiKey',

    !dassetConfig?.apiKey && '- "dassetx.com".apiKey',
    !dassetConfig?.accountId && '- "dassetx.com".accountId',
  ]

  if (errorMessages.some(Boolean)) {
    return new Error(
      `Config file is missing fields:
${errorMessages.join('\n')}`,
    )
  }

  return {
    kiwiCoin: kiwiCoinConfig,
    openExchangeRates: openExchangeRatesConfig,
    coinMarketCap: coinMarketCapConfig,
    dasset: dassetConfig,
  }
}

const readConfig = async (configPath: string): Promise<Config | Error> => {
  const configString = await fs.readFile(configPath, 'utf8')
  return parseConfig(configString)
}

export { readConfig, parseConfig, Config }
