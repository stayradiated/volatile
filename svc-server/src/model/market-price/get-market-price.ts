import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError, messageWithContext } from '../../util/error.js'
import type { Pool } from '../../types.js'

type GetMarketPriceOptions = {
  marketUid: string
  assetSymbol: string
  currency: string
}

const getMarketPrice = async (
  pool: Pool,
  options: GetMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUid, assetSymbol, currency } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.market_price.SQL, s.market_price.Selectable[]>`
    SELECT ${'price'}
    FROM ${'market_price'} 
    WHERE ${{
      market_uid: marketUid,
      asset_symbol: assetSymbol,
      currency,
    }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool),
  )

  if (rows instanceof Error) {
    return new DbError(`Could not get market price.`, { cause: rows })
  }

  const row = rows[0]
  if (!row) {
    return new DbError(
      messageWithContext(
        `No market price available for ${assetSymbol}/${currency}.`,
        { marketUid, assetSymbol, currency },
      ),
    )
  }

  return row.price
}

export { getMarketPrice }
