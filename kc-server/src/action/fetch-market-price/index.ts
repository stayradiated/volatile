import { setTimeout } from 'timers/promises'
import { inspect } from 'util'
import debug from 'debug'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { getMarketUID } from '../../model/market/index.js'
import { insertMarketPrice } from '../../model/market-price/index.js'
import { currencyConfigList, Currency } from './currency-config.js'
import {
  marketPriceConfigList,
  MarketPriceInstance,
} from './market-price-config.js'

type Input = Record<string, unknown>
type Output = void

const log = debug('market-price')

const SLEEP_MS = 60 * 1000

const fetchMarketPriceHandler: ActionHandlerFn<Input, Output> = async (
  context,
): Promise<void> => {
  const { pool } = context

  const currencyFnList = currencyConfigList.map((currencyConfig) => {
    const { createFetchRateFn } = currencyConfig
    return {
      ...currencyConfig,
      fetchRate: createFetchRateFn(),
    }
  })

  const fetchCurrencyRate = async (
    currency: Currency,
  ): Promise<number | Error> => {
    if (currency === 'NZD') {
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
    marketPriceConfigList.flatMap((marketPriceConfig) => {
      const { market, createFetchPriceFn, currency, symbols } =
        marketPriceConfig
      return symbols.map((symbol) => ({
        market,
        currency,
        symbol,
        fetchPrice: createFetchPriceFn({
          symbol,
          currency,
        }),
      }))
    })

  const initLoop = async (marketPriceInstance: MarketPriceInstance) => {
    const loop = async (): Promise<void> => {
      const { market, fetchPrice, currency, symbol } = marketPriceInstance

      const marketUID = await getMarketUID(pool, market)
      if (marketUID instanceof Error) {
        log(marketUID)
        return
      }

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
          marketUID,
          price,
          currency,
          symbol,
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
