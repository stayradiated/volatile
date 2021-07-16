import { randomUUID } from 'crypto'
import pmem from 'p-memoize'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { throwIfError } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type Exchange = {
  id: string
  name: string
}

const EXCHANGE_KIWI_COIN: Exchange = {
  id: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
}

const forceGetExchangeUID = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  const insert: s.exchange.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: exchange.id,
    name: exchange.name,
  }

  const rows = await db.sql<s.exchange.SQL, s.exchange.Selectable[]>`
    INSERT INTO ${'exchange'} (${db.cols(insert)})
    VALUES (${db.vals(insert)})
    ON CONFLICT ON CONSTRAINT unique_exchange_id 
      DO UPDATE SET
        name = EXCLUDED.name,
        updated_at = EXCLUDED.updated_at
    RETURNING uid
  `.run(pool)

  const row = rows[0]
  if (!row) {
    return new Error('forceGetExchangeUID received 0 rows')
  }

  return row.uid
}

const forceGetExchangeUIDOrThrow = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string> => throwIfError<string>(forceGetExchangeUID(pool, exchange))

const getExchangeUID = pmem(forceGetExchangeUIDOrThrow, {
  cacheKey: ([_, exchange]) => exchange,
})

export { Exchange, EXCHANGE_KIWI_COIN, forceGetExchangeUID, getExchangeUID }
