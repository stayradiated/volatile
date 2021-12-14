import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

type SelectMinMarketPriceOptions = {
  marketUID: string
  assetSymbol: string
  currency: string
  minutes: number
}

const selectMinMarketPrice = async (
  pool: Pool,
  options: SelectMinMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUID, assetSymbol, currency, minutes } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, Array<{ min_price: string }>>`
    SELECT (
      SELECT round(min(t2.${'price'}), 4) as min_price
      FROM ${'market_price'} t2
      WHERE t2.${'market_uid'} = t1.${'market_uid'}
        AND t2.${'asset_symbol'} = t1.${'asset_symbol'}
        AND t2.${'currency'} = t1.${'currency'}
        AND t2.${'timestamp'} <= t1.${'timestamp'}
        AND t2.${'timestamp'} > t1.${'timestamp'} - '${db.raw(
      Math.round(minutes).toFixed(0),
    )} minute 15 second'::interval)
    FROM ${'market_price'} t1
    WHERE ${{ market_uid: marketUID, asset_symbol: assetSymbol, currency }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not execute minMarketPrice query.',
      cause: rows,
      context: options,
    })
  }

  const row = rows[0]
  const minimumPrice = row ? Number.parseFloat(row.min_price) : Number.NaN

  if (typeof minimumPrice !== 'number' || Number.isNaN(minimumPrice)) {
    return new DBError({
      message: `Could not get minimum market price for ${assetSymbol}/${currency}.`,
      context: {
        marketUID,
        assetSymbol,
        currency,
        row,
      },
    })
  }

  return minimumPrice
}

export { selectMinMarketPrice }
