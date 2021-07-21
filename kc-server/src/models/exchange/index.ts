import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import type { Pool } from '../../types.js'

type Exchange = {
  ID: string
  name: string
}

const EXCHANGE_KIWI_COIN: Exchange = {
  ID: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
}

const EXCHANGE_DASSET: Exchange = {
  ID: 'dassetx.com',
  name: 'Dasset',
}

const forceGetExchangeUID = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  const insert: s.exchange.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: exchange.ID,
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

const localCache = new Map<Exchange, string>()
const getExchangeUID = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  if (localCache.has(exchange)) {
    return localCache.get(exchange)!
  }

  const exchangeUID = await forceGetExchangeUID(pool, exchange)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  localCache.set(exchange, exchangeUID)
  return exchangeUID
}

export {
  Exchange,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_DASSET,
  forceGetExchangeUID,
  getExchangeUID,
}
