import { setTimeout } from 'timers/promises'
import { inspect } from 'util'
import debug from 'debug'

import type { ActionHandlerFn } from '../../utils/action-handler.js'
import { insertMarketPrice } from '../../models/market-price/index.js'
import {
  currencyConfigList,
  Currency,
} from '../../models/market-price/currency-config.js'
import {
  marketPriceConfigList,
  MarketPriceInstance,
} from '../../models/market-price/market-price-config.js'

type Input = Record<string, unknown>
type Output = void

const log = debug('market-price')

const SLEEP_MS = 60 * 1000

const fetchMarketPriceHandler: ActionHandlerFn<Input, Output> = async (
  context,
): Promise<void> => {
  const { config, pool } = context

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

        await insertMarketPrice(pool, {
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

export { fetchMarketPriceHandler }
