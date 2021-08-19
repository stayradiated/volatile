import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type * as s from 'zapatos/schema'

import { DBError, IllegalStateError } from '../../util/error.js'

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
  const value: s.exchange.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: exchange.ID,
    name: exchange.name,
  }

  const rows = await errorBoundary(async () =>
    db
      .upsert('exchange', [value], db.constraint('unique_exchange_id'), {
        updateColumns: ['name', 'updated_at'],
        returning: ['uid'],
      })
      .run(pool),
  )

  if (rows instanceof Error || !rows) {
    return new DBError({
      message: 'Could not upsert exchange.',
      context: { exchange },
    })
  }

  return rows[0]!.uid
}

const forceGetExchange = async (
  pool: Pool,
  exchangeUID: string,
): Promise<Exchange | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne(
        'exchange',
        {
          uid: exchangeUID,
        },
        {
          columns: ['id'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return new DBError({
      message: 'Could not find exchange.',
      cause: row,
      context: { exchangeUID },
    })
  }

  switch (row.id) {
    case EXCHANGE_KIWI_COIN.ID:
      return EXCHANGE_KIWI_COIN
    case EXCHANGE_DASSET.ID:
      return EXCHANGE_DASSET
    default:
      return new IllegalStateError({
        message: 'Could not identify exchange.',
        context: { exchangeID: row.id },
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
