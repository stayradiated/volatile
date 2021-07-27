import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import type { Pool, CryptoSymbol } from '../../types.js'

const getMarketPrice = async (
  pool: Pool,
  marketUID: string,
  symbol: CryptoSymbol,
): Promise<number | Error> => {
  const rows = await db.sql<s.market_price.SQL, s.market_price.Selectable[]>`
    SELECT ${'price_nzd'}
    FROM ${'market_price'} 
    WHERE ${{ market_uid: marketUID, symbol }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool)

  const row = rows[0]
  if (!row) {
    return new Error(`Could not get market price for marketUID='${marketUID}'`)
  }

  return row.price_nzd
}

export { getMarketPrice }
