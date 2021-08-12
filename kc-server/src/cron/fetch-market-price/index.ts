import { errorListBoundary } from '@stayradiated/error-boundary'

import { getMarketUID } from '../../model/market/index.js'
import { insertMarketPrice } from '../../model/market-price/index.js'

import type { CronHandlerFn } from '../../util/cron-handler.js'
import { fetchCurrencyRate, marketPriceInstanceList } from './instance.js'

import type { MarketPriceInstance } from './market-price-config.js'

type Input = Record<string, unknown>
type Output = void

const fetchMarketPriceHandler: CronHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool } = context

  const fetchMarketPrice = async (
    marketPriceInstance: MarketPriceInstance,
  ): Promise<void | Error> => {
    const { market, fetchPrice, currency, symbol } = marketPriceInstance

    const marketUID = await getMarketUID(pool, market)
    if (marketUID instanceof Error) {
      return marketUID
    }

    const timestamp = new Date()

    const [price, fxRate] = await Promise.all([
      fetchPrice(),
      fetchCurrencyRate(currency),
    ])

    if (price instanceof Error) {
      return price
    }

    if (fxRate instanceof Error) {
      return fxRate
    }

    const priceNZD = price * fxRate

    const error = await insertMarketPrice(pool, {
      timestamp,
      marketUID,
      price,
      currency,
      symbol,
      fxRate,
      priceNZD,
    })
    if (error instanceof Error) {
      return error
    }

    return undefined
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      marketPriceInstanceList.map(async (instance) =>
        fetchMarketPrice(instance),
      ),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { fetchMarketPriceHandler }
