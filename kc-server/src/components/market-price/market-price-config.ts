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
} from '../market/index.js'
import type { Config } from '../../types.js'
import { Currency } from './currency-config.js'

type MarketPriceConfig = {
  readonly market: Market
  readonly currency: Currency
  readonly createFetchPriceFn: (config: Config) => () => Promise<number | Error>
}

type MarketPriceInstance = MarketPriceConfig & {
  readonly fetchPrice: () => Promise<number | Error>
}

const marketPriceConfigList: readonly MarketPriceConfig[] = [
  {
    market: MARKET_BINANCE_US,
    currency: Currency.USD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.binance, {}),
  },
  {
    market: MARKET_DASSET,
    currency: Currency.NZD,
    createFetchPriceFn: (config) =>
      createCachedFetchFn(marketPriceSources.dasset, {
        config: config.dasset,
      }),
  },
  {
    market: MARKET_KIWI_COIN,
    currency: Currency.NZD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.kiwiCoin, {}),
  },
  {
    market: MARKET_EASY_CRYPTO,
    currency: Currency.NZD,
    createFetchPriceFn: () =>
      createCachedFetchFn(marketPriceSources.easyCrypto, {}),
  },
]

export { MarketPriceConfig, MarketPriceInstance, marketPriceConfigList }
