import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { explainError } from '../../utils/error.js'

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

const forceGetExchange = async (
  pool: Pool,
  exchangeUID: string,
): Promise<Exchange | Error> => {
  const row = await db
    .selectExactlyOne(
      'exchange',
      {
        uid: exchangeUID,
      },
      {
        columns: ['id'],
      },
    )
    .run(pool)
  if (row instanceof Error) {
    return explainError(
      'forceGetExchange: Could not find exchange.',
      { exchangeUID },
      row,
    )
  }

  switch (row.id) {
    case EXCHANGE_KIWI_COIN.ID:
      return EXCHANGE_KIWI_COIN
    case EXCHANGE_DASSET.ID:
      return EXCHANGE_DASSET
    default:
      return explainError('forceGetExchange: Could not identify exchange.', {
        exchangeID: row.id,
      })
  }
}

const globalUIDCache = new Map<Exchange, string>()

const getExchangeUID = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  if (globalUIDCache.has(exchange)) {
    return globalUIDCache.get(exchange)!
  }

  const exchangeUID = await forceGetExchangeUID(pool, exchange)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  globalUIDCache.set(exchange, exchangeUID)
  return exchangeUID
}

const getExchange = async (
  pool: Pool,
  exchangeUID: string,
): Promise<Exchange | Error> => {
  for (const entry of globalUIDCache.entries()) {
    if (entry[1] === exchangeUID) {
      return entry[0]
    }
  }

  const exchange = await forceGetExchange(pool, exchangeUID)
  if (exchange instanceof Error) {
    return exchange
  }

  globalUIDCache.set(exchange, exchangeUID)
  return exchange
}

export {
  Exchange,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_DASSET,
  forceGetExchangeUID,
  forceGetExchange,
  getExchangeUID,
  getExchange,
}
