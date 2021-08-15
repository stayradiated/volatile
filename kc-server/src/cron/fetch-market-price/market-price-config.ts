import {
  createCachedFetchFn,
  marketPriceSources,
} from '@stayradiated/market-price'

import { DASSET_API_KEY, DASSET_ACCOUNT_ID } from '../../env.js'

import {
  Market,
  MARKET_BINANCE_US,
  MARKET_DASSET,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
} from '../../model/market/index.js'
import type { Currency } from '../../types.js'

type FetchContext = {
  assetSymbol: string
  currency: Currency
}

type MarketPriceConfig = {
  market: Market
  currency: Currency
  assetSymbols: string[]
  createFetchPriceFn: (ctx: FetchContext) => () => Promise<number | Error>
}

type MarketPriceInstance = {
  market: Market
  currency: Currency
  assetSymbol: string
  fetchPrice: () => Promise<number | Error>
}

const marketPriceConfigList: MarketPriceConfig[] = [
  {
    market: MARKET_BINANCE_US,
    currency: 'USD',
    assetSymbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.binance, {
        symbol: assetSymbol,
        currency,
      }),
  },
  {
    market: MARKET_DASSET,
    currency: 'NZD',
    assetSymbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.dasset, {
        config: {
          apiKey: DASSET_API_KEY,
          accountId: DASSET_ACCOUNT_ID,
        },
        symbol: assetSymbol,
        currency,
      }),
  },
  {
    market: MARKET_KIWI_COIN,
    currency: 'NZD',
    assetSymbols: ['BTC'],
    createFetchPriceFn: ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.kiwiCoin, {
        symbol: assetSymbol,
        currency,
      }),
  },
  {
    market: MARKET_EASY_CRYPTO,
    currency: 'NZD',
    assetSymbols: ['BTC', 'ETH'],
    createFetchPriceFn: ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.easyCrypto, {
        symbol: assetSymbol,
        currency,
      }),
  },
]

export { MarketPriceConfig, MarketPriceInstance, marketPriceConfigList }
