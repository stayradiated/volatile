import {
  createCachedFetchFn,
  marketPriceSources,
} from '@stayradiated/market-price'

import {
  Market,
  MARKET_BINANCE_US,
  MARKET_DASSET,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
} from '../../models/market/index.js'
import type { Config, Currency, CryptoSymbol } from '../../types.js'

type FetchContext = {
  config: Config
  symbol: CryptoSymbol
  currency: Currency
}

type MarketPriceConfig = {
  market: Market
  currency: Currency
  symbols: CryptoSymbol[]
  createFetchPriceFn: (ctx: FetchContext) => () => Promise<number | Error>
}

type MarketPriceInstance = {
  market: Market
  currency: Currency
  symbol: CryptoSymbol
  fetchPrice: () => Promise<number | Error>
}

const marketPriceConfigList: MarketPriceConfig[] = [
  {
    market: MARKET_BINANCE_US,
    currency: 'USD',
    symbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ symbol, currency }) =>
      createCachedFetchFn(marketPriceSources.binance, { symbol, currency }),
  },
  {
    market: MARKET_DASSET,
    currency: 'NZD',
    symbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ config, symbol, currency }) =>
      createCachedFetchFn(marketPriceSources.dasset, {
        config: config.dasset,
        symbol,
        currency,
      }),
  },
  {
    market: MARKET_KIWI_COIN,
    currency: 'NZD',
    symbols: ['BTC'],
    createFetchPriceFn: ({ symbol, currency }) =>
      createCachedFetchFn(marketPriceSources.kiwiCoin, { symbol, currency }),
  },
  {
    market: MARKET_EASY_CRYPTO,
    currency: 'NZD',
    symbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ symbol, currency }) =>
      createCachedFetchFn(marketPriceSources.easyCrypto, { symbol, currency }),
  },
]

export { MarketPriceConfig, MarketPriceInstance, marketPriceConfigList }
