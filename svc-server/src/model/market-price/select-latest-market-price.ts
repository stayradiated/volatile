import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError, messageWithContext } from '../../util/error.js'
import type { Pool } from '../../types.js'

type SelectLatestMarketPriceOptions = {
  marketUid: string
  assetSymbol: string
  currency: string
}

const selectLatestMarketPrice = async (
  pool: Pool,
  options: SelectLatestMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUid, assetSymbol, currency } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, Array<{ latest_price: string }>>`
    SELECT ${'price'} as latest_price
    FROM ${'market_price'}
    WHERE ${{ market_uid: marketUid, asset_symbol: assetSymbol, currency }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DbError('Could not execute latestMarketPrice query.', {
      cause: rows,
    })
  }

  const row = rows[0]
  const latestPrice = row ? Number.parseFloat(row.latest_price) : Number.NaN

  if (typeof latestPrice !== 'number' || Number.isNaN(latestPrice)) {
    return new DbError(
      messageWithContext(
        `Could not get latest market price for ${assetSymbol}/${currency}.`,
        { marketUid, assetSymbol, currency, row },
      ),
    )
  }

  return latestPrice
}

export { selectLatestMarketPrice }
