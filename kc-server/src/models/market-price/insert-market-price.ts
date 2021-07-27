import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { MarketPrice } from './types.js'

const insertMarketPrice = async (
  pool: Pool,
  options: MarketPrice,
): Promise<MarketPrice | Error> => {
  const { timestamp, marketUID, price, currency, symbol, fxRate, priceNZD } =
    options

  const marketPrice: s.market_price.Insertable = {
    timestamp,
    market_uid: marketUID,
    price,
    currency,
    symbol,
    fx_rate: fxRate,
    price_nzd: priceNZD,
  }

  const error = await errorBoundary(async () =>
    db.insert('market_price', marketPrice, { returning: [] }).run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    ...options,
  }
}

export { insertMarketPrice }
