import { setTimeout } from 'timers/promises'
import { inspect } from 'util'
import debug from 'debug'

import type { Component } from '../../types.js'
import { createMarketPrice } from './create-market-price.js'
import { currencyConfigList, Currency } from './currency-config.js'
import {
  marketPriceConfigList,
  MarketPriceInstance,
} from './market-price-config.js'

const log = debug('market-price')

const SLEEP_MS = 60 * 1000

const fetchMarketPrice: Component = async (props): Promise<void> => {
  const { config, pool } = props

  const currencyFnList = currencyConfigList.map((currencyConfig) => {
    const { createFetchRateFn } = currencyConfig
    return {
      ...currencyConfig,
      fetchRate: createFetchRateFn(config),
    }
  })

  const fetchCurrencyRate = async (
    currency: Currency,
  ): Promise<number | Error> => {
    if (currency === Currency.NZD) {
      return 1
    }

    const currencyConfig = currencyFnList.find(
      (currencyConfig) => currencyConfig.currency === currency,
    )
    if (!currencyConfig) {
      return new Error(
        `Could not find currency config for ${inspect(currency)}.`,
      )
    }

    return currencyConfig.fetchRate()
  }

  const marketPriceInstanceList: MarketPriceInstance[] =
    marketPriceConfigList.map((marketPriceConfig) => {
      const { createFetchPriceFn } = marketPriceConfig
      return {
        ...marketPriceConfig,
        fetchPrice: createFetchPriceFn(config),
      }
    })

  const initLoop = async (marketPriceInstance: MarketPriceInstance) => {
    const loop = async (): Promise<void> => {
      const { market, fetchPrice, currency } = marketPriceInstance
      const timestamp = new Date()

      const [price, fxRate] = await Promise.all([
        fetchPrice(),
        fetchCurrencyRate(currency),
      ])

      if (price instanceof Error) {
        log(price)
      } else if (fxRate instanceof Error) {
        log(fxRate)
      } else {
        const priceNZD = price * fxRate

        await createMarketPrice(pool, {
          timestamp,
          market,
          price,
          currency,
          fxRate,
          priceNZD,
        })
      }

      await setTimeout(SLEEP_MS)
      await loop()
    }

    return loop()
  }

  await Promise.all(
    marketPriceInstanceList.map(async (instance) => initLoop(instance)),
  )
}

export { fetchMarketPrice }
