import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

const getMarketPrice = async (
  pool: Pool,
  marketUID: string,
  assetSymbol: string,
): Promise<number | Error> => {
  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, s.market_price.Selectable[]>`
    SELECT ${'price_nzd'}
    FROM ${'market_price'} 
    WHERE ${{ market_uid: marketUID, asset_symbol: assetSymbol }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DBError({
      message: `Could not get market price.`,
      cause: rows,
      context: { marketUID, assetSymbol },
    })
  }

  const row = rows[0]
  if (!row) {
    return new DBError({
      message: 'No market price available.',
      context: { marketUID, assetSymbol },
    })
  }

  return row.price_nzd
}

export { getMarketPrice }
