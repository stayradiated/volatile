import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

type SelectAvgMarketPriceOptions = {
  marketUid: string
  assetSymbol: string
  currency: string
  minutes: number
}

const selectAvgMarketPrice = async (
  pool: Pool,
  options: SelectAvgMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUid, assetSymbol, currency, minutes } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, Array<{ avg_price: string }>>`
    SELECT (
      SELECT round(avg(t2.${'price'}), 4) as avg_price
      FROM ${'market_price'} t2
      WHERE t2.${'market_uid'} = t1.${'market_uid'}
        AND t2.${'asset_symbol'} = t1.${'asset_symbol'}
        AND t2.${'currency'} = t1.${'currency'}
        AND t2.${'timestamp'} <= t1.${'timestamp'}
        AND t2.${'timestamp'} > t1.${'timestamp'} - '${db.raw(
      Math.round(minutes).toFixed(0),
    )} minute 15 second'::interval)
    FROM ${'market_price'} t1
    WHERE ${{ market_uid: marketUid, asset_symbol: assetSymbol, currency }}
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
  const averagePrice = row ? Number.parseFloat(row.avg_price) : Number.NaN

  if (typeof averagePrice !== 'number' || Number.isNaN(averagePrice)) {
    return new DBError({
      message: `Could not get average market price for ${assetSymbol}/${currency}.`,
      context: {
        marketUid,
        assetSymbol,
        currency,
        row,
      },
    })
  }

  return averagePrice
}

export { selectAvgMarketPrice }
