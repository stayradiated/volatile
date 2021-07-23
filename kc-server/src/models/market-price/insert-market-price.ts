import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { getMarketUID, Market } from '../market/index.js'
import type { Pool } from '../../types.js'
import type { Currency } from './currency-config.js'

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
): Promise<void | Error> => {
  const { timestamp, market, price, currency, fxRate, priceNZD } = options

  const marketUID = await getMarketUID(pool, market)
  if (marketUID instanceof Error) {
    return marketUID
  }

  const now = new Date()
  const marketPrice: s.market_price.Insertable = {
    created_at: now,
    updated_at: now,
    timestamp,
    market_uid: marketUID,
    price,
    currency,
    fx_rate: fxRate,
    price_nzd: priceNZD,
  }

  const result = await errorBoundary(async () =>
    db.insert('market_price', marketPrice).run(pool),
  )

  if (result instanceof Error) {
    return result
  }
}

export { insertMarketPrice }
