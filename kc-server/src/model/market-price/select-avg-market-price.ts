import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import type { Pool, CryptoSymbol } from '../../types.js'

type SelectAvgMarketPriceOptions = {
  marketUID: string
  symbol: CryptoSymbol
}

const selectAvgMarketPrice = async (
  pool: Pool,
  options: SelectAvgMarketPriceOptions,
): Promise<number | Error> => {
  const { marketUID, symbol } = options

  const rows = await db.sql<
    s.market_price.SQL,
    Array<{ avg_price_nzd: string }>
  >`
    SELECT (
      SELECT round(avg(t2.${'price_nzd'}), 4) as avg_price_nzd
      FROM ${'market_price'} t2
      WHERE t2.${'market_uid'} = t1.${'market_uid'}
        AND t2.${'symbol'} = t1.${'symbol'}
        AND t2.${'timestamp'} <= t1.${'timestamp'}
        AND t2.${'timestamp'} > t1.${'timestamp'} - '10 minute 15 second'::interval)
    FROM ${'market_price'} t1
    WHERE ${{ market_uid: marketUID, symbol }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool)

  const row = rows[0]
  if (!row) {
    return new Error(`Could not get market price for marketUID='${marketUID}'`)
  }

  return Number.parseFloat(row.avg_price_nzd)
}

export { selectAvgMarketPrice }
