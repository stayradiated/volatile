import fs from 'fs/promises'
import { Config as KiwiCoinConfig } from '@stayradiated/kiwi-coin-api'
import {
  CoinMarketCapConfig,
  OpenExchangeRatesConfig,
  DassetConfig,
} from '@stayradiated/market-price'

type JSONConfig = {
  'kiwi-coin.com'?: KiwiCoinConfig
  'openexchangerates.org'?: OpenExchangeRatesConfig
  'coinmarketcap.com'?: CoinMarketCapConfig
  'dassetx.com'?: DassetConfig
}

type Config = {
  kiwiCoin: KiwiCoinConfig
  openExchangeRates: OpenExchangeRatesConfig
  coinMarketCap: CoinMarketCapConfig
  dasset: DassetConfig
}

const readConfig = async (configPath: string) => {
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

  const openExchangeRatesConfig = configJSON['openexchangerates.org']
  if (!openExchangeRatesConfig) {
    throw new Error('Config file is missing "openexchangerates.org" section.')
  }

  if (!openExchangeRatesConfig.appId) {
    throw new Error('Config file is missing "openexchangerates.org"."appId".')
  }

  const coinMarketCapConfig = configJSON['coinmarketcap.com']
  if (!coinMarketCapConfig) {
    throw new Error('Config file is missing "coinmarketcap.com" section.')
  }

  if (!coinMarketCapConfig.apiKey) {
    throw new Error('Config file is missing "coinmarketcap.com"."apiKey".')
  }

  const dassetConfig = configJSON['dassetx.com']
  if (!dassetConfig) {
    throw new Error('Config file is missing "dassetx.com" section.')
  }

  if (!dassetConfig.apiKey) {
    throw new Error('Config file is missing "dassetx.com"."apiKey".')
  }

  if (!dassetConfig.accountId) {
    throw new Error('Config file is missing "dassetx.com"."accountId".')
  }

  return {
    kiwiCoin: kiwiCoinConfig,
    openExchangeRates: openExchangeRatesConfig,
    coinMarketCap: coinMarketCapConfig,
    dasset: dassetConfig,
  }
}

export { readConfig, Config }
