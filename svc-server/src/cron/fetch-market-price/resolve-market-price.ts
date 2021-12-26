import { createCachedFetchFn, marketPriceSources } from '@volatile/market-price'

import {
  Market,
  MARKET_BINANCE_US,
  MARKET_DASSET,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
  MARKET_INDEPENDENT_RESERVE,
  MARKET_KRAKEN,
} from '../../model/market/index.js'

import { DASSET_API_KEY, DASSET_ACCOUNT_ID } from '../../env.js'

import type { AssetSymbol, Currency } from './config.js'

type ResolverOptions = {
  assetSymbol: AssetSymbol
  currency: Currency
}

type Resolver = (options: ResolverOptions) => () => Promise<number | Error>

const resolveMarketPriceMap = new Map<Market, Resolver>([
  [
    MARKET_BINANCE_US,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.binance, {
        assetSymbol,
        currency,
      }),
  ],

  [
    MARKET_DASSET,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.dasset, {
        config: {
          apiKey: DASSET_API_KEY,
          accountId: DASSET_ACCOUNT_ID,
        },
        assetSymbol,
        currency,
      }),
  ],

  [
    MARKET_KIWI_COIN,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.kiwiCoin, {
        assetSymbol,
        currency,
      }),
  ],

  [
    MARKET_EASY_CRYPTO,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.easyCrypto, {
        assetSymbol,
        currency,
      }),
  ],

  [
    MARKET_INDEPENDENT_RESERVE,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.independentReserve, {
        assetSymbol,
        currency,
      }),
  ],

  [
    MARKET_KRAKEN,
    ({ assetSymbol, currency }) =>
      createCachedFetchFn(marketPriceSources.kraken, {
        assetSymbol,
        currency,
      }),
  ],
])

export { resolveMarketPriceMap }
