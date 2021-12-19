import { DateTime } from 'luxon'

import { getMarketUID } from '../../model/market/index.js'
import { insertMarketPrice } from '../../model/market-price/index.js'

import type { Pool } from '../../types.js'
import type { MarketPriceInstance } from './instance.js'

const fetchMarketPrice = async (
  pool: Pool,
  marketPriceInstance: MarketPriceInstance,
): Promise<void | Error> => {
  const {
    market,
    sourceCurrency,
    currency,
    fetchSourcePrice,
    fetchFxRate,
    assetSymbol,
  } = marketPriceInstance

  const marketUID = await getMarketUID(pool, market)
  if (marketUID instanceof Error) {
    return marketUID
  }

  const timestamp = DateTime.local()

  const [sourcePrice, fxRate] = await Promise.all([
    fetchSourcePrice(),
    fetchFxRate(),
  ])

  if (sourcePrice instanceof Error) {
    return sourcePrice
  }

  if (fxRate instanceof Error) {
    return fxRate
  }

  const price = sourcePrice * fxRate

  const error = await insertMarketPrice(pool, {
    timestamp,
    marketUID,
    sourcePrice,
    sourceCurrency,
    assetSymbol,
    fxRate,
    price,
    currency,
  })
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { fetchMarketPrice }
