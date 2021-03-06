import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

type SelectLatestMarketPriceOptions = {
  marketUID: string
  assetSymbol: string
  currency: string
}

const selectLatestMarketPrice = async (
  pool: Pool,
  options: SelectLatestMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUID, assetSymbol, currency } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, Array<{ latest_price: string }>>`
    SELECT ${'price'} as latest_price
    FROM ${'market_price'}
    WHERE ${{ market_uid: marketUID, asset_symbol: assetSymbol, currency }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not execute latestMarketPrice query.',
      cause: rows,
      context: options,
    })
  }

  const row = rows[0]
  const latestPrice = row ? Number.parseFloat(row.latest_price) : Number.NaN

  if (typeof latestPrice !== 'number' || Number.isNaN(latestPrice)) {
    return new DBError({
      message: `Could not get latest market price for ${assetSymbol}/${currency}.`,
      context: {
        marketUID,
        assetSymbol,
        currency,
        row,
      },
    })
  }

  return latestPrice
}

export { selectLatestMarketPrice }
