import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

type SelectAvgMarketPriceOptions = {
  marketUID: string
  assetSymbol: string
  currency: string
}

const selectAvgMarketPrice = async (
  pool: Pool,
  options: SelectAvgMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUID, assetSymbol, currency } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, Array<{ avg_price: string }>>`
    SELECT (
      SELECT round(avg(t2.${'price'}), 4) as avg_price
      FROM ${'market_price'} t2
      WHERE t2.${'market_uid'} = t1.${'market_uid'}
        AND t2.${'asset_symbol'} = t1.${'asset_symbol'}
        AND t2.${'timestamp'} <= t1.${'timestamp'}
        AND t2.${'timestamp'} > t1.${'timestamp'} - '10 minute 15 second'::interval)
    FROM ${'market_price'} t1
    WHERE ${{ market_uid: marketUID, asset_symbol: assetSymbol, currency }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not execute avgMarketPrice query.',
      cause: rows,
      context: options,
    })
  }

  const row = rows[0]
  if (!row) {
    return new DBError({
      message: `Could not get average market price for ${assetSymbol}/${currency}.`,
      context: options,
    })
  }

  return Number.parseFloat(row.avg_price)
}

export { selectAvgMarketPrice }
