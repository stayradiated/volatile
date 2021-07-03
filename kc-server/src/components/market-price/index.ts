import { setTimeout } from 'timers/promises'
import { inspect } from 'util'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import {
  createCachedFetchFn,
  marketPriceSources,
  currencySources,
} from '@stayradiated/market-price'

import {
  Market,
  BINANCE_US,
  DASSET,
  KIWI_COIN,
  EASY_CRYPTO,
  getMarketUUID,
} from '../markets/index.js'

import type { Config, Component, Pool } from '../../types.js'

type InsertMarketPriceOptions = {
  timestamp: Date
  market: Market
  price: number
  currency: Currency
  fxRate: number
  priceNZD: number
}

const insertMarketPrice = async (
  pool: Pool,
  options: InsertMarketPriceOptions,
) => {
  const { timestamp, market, price, currency, fxRate, priceNZD } = options

  const now = new Date()
  const marketPrice: s.market_price.Insertable = {
    created_at: now,
    updated_at: now,
    timestamp,
    market_uid: await getMarketUUID(pool, market),
    price,
    currency,
    fx_rate: fxRate,
    price_nzd: priceNZD,
  }

  await db.sql<s.market_price.SQL>`
    INSERT INTO ${'market_price'} (${db.cols(marketPrice)})
    VALUES (${db.vals(marketPrice)})`.run(pool)
}

enum Currency {
  USD = 'USD',
  NZD = 'NZD',
}

type CurrencyConfig = {
  readonly currency: Currency
  readonly createFetchRateFn: (config: Config) => () => Promise<number>
}

const currencyConfigList: readonly CurrencyConfig[] = [
  {
    currency: Currency.NZD,
    createFetchRateFn: () => {
      return async () => Promise.resolve(1)
    },
  },
  {
    currency: Currency.USD,
    createFetchRateFn: (config: Config) => {
      return createCachedFetchFn(currencySources.USD_NZD, {
        config: config.openExchangeRates,
      })
    },
  },
]

type MarketPriceConfig = {
  readonly market: Market
  readonly currency: Currency
  readonly createFetchPriceFn: (config: Config) => () => Promise<number>
}

const marketPriceConfigList: readonly MarketPriceConfig[] = [
  {
    market: BINANCE_US,
    currency: Currency.USD,
    createFetchPriceFn: () => {
      return createCachedFetchFn(marketPriceSources.binance, {})
    },
  },
  {
    market: DASSET,
    currency: Currency.NZD,
    createFetchPriceFn: (config) => {
      return createCachedFetchFn(marketPriceSources.dasset, {
        config: config.dasset,
      })
    },
  },
  {
    market: KIWI_COIN,
    currency: Currency.NZD,
    createFetchPriceFn: () => {
      return createCachedFetchFn(marketPriceSources.kiwiCoin, {})
    },
  },
  {
    market: EASY_CRYPTO,
    currency: Currency.NZD,
    createFetchPriceFn: () => {
      return createCachedFetchFn(marketPriceSources.easyCrypto, {})
    },
  },
]

const fetchMarketPrice: Component = async (props) => {
  const { config, pool } = props

  const currencyFnList = currencyConfigList.map((currencyConfig) => {
    const { createFetchRateFn } = currencyConfig
    return {
      ...currencyConfig,
      fetchRate: createFetchRateFn(config),
    }
  })

  const fetchCurrencyRate = async (currency: Currency): Promise<number> => {
    if (currency === Currency.NZD) {
      return 1
    }

    const currencyConfig = currencyFnList.find((currencyConfig) => {
      return currencyConfig.currency === currency
    })
    if (!currencyConfig) {
      throw new Error(
        `Could not find currency config for ${inspect(currency)}.`,
      )
    }

    return currencyConfig.fetchRate()
  }

  const marketFnList = marketPriceConfigList.map((marketPriceConfig) => {
    const { createFetchPriceFn } = marketPriceConfig
    return {
      ...marketPriceConfig,
      fetchPrice: createFetchPriceFn(config),
    }
  })

  const loop = async (): Promise<void> => {
    await Promise.all(
      marketFnList.map(async (marketPriceConfig) => {
        const { market, fetchPrice, currency } = marketPriceConfig
        const timestamp = new Date()

        const price = await fetchPrice()
        const fxRate = await fetchCurrencyRate(currency)
        const priceNZD = price * fxRate

        await insertMarketPrice(pool, {
          timestamp,
          market,
          price,
          currency,
          fxRate,
          priceNZD,
        })
      }),
    )

    await setTimeout(5 * 1000)
    return loop()
  }

  await loop()
}

export { fetchMarketPrice }
