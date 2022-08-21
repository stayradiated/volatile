import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { MarketPrice } from './types.js'

const insertMarketPrice = async (
  pool: Pool,
  options: MarketPrice,
): Promise<void | Error> => {
  const marketPrice: s.market_price.Insertable = {
    timestamp: options.timestamp,
    market_uid: options.marketUid,
    asset_symbol: options.assetSymbol,
    source_price: options.sourcePrice,
    source_currency: options.sourceCurrency,
    fx_rate: options.fxRate,
    price: options.price,
    currency: options.currency,
  }

  const error = await errorBoundary(async () =>
    db.insert('market_price', marketPrice, { returning: [] }).run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { insertMarketPrice }
