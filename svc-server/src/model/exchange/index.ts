import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type * as s from 'zapatos/schema'

import { DbError, IllegalStateError } from '../../util/error.js'

import type { Pool } from '../../types.js'

type Exchange = {
  ID: string
  name: string
  url: string
}

const EXCHANGE_KIWI_COIN: Exchange = {
  ID: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
  url: 'https://kiwi-coin.com',
}

const EXCHANGE_DASSET: Exchange = {
  ID: 'dassetx.com',
  name: 'Dasset',
  url: 'https://dassetx.com',
}

const EXCHANGE_INDEPENDENT_RESERVE: Exchange = {
  ID: 'independentreserve.com',
  name: 'Independent Reserve',
  url: 'https://independentreserve.com',
}

const forceGetExchangeUid = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  const value: s.exchange.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: exchange.ID,
    name: exchange.name,
    url: exchange.url,
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
    return new DbError({
      message: 'Could not upsert exchange.',
      context: { exchange },
    })
  }

  return rows[0]!.uid
}

const forceGetExchange = async (
  pool: Pool,
  exchangeUid: string,
): Promise<Exchange | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne(
        'exchange',
        {
          uid: exchangeUid,
        },
        {
          columns: ['id'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return new DbError({
      message: 'Could not find exchange.',
      cause: row,
      context: { exchangeUid },
    })
  }

  switch (row.id) {
    case EXCHANGE_KIWI_COIN.ID:
      return EXCHANGE_KIWI_COIN
    case EXCHANGE_DASSET.ID:
      return EXCHANGE_DASSET
    case EXCHANGE_INDEPENDENT_RESERVE.ID:
      return EXCHANGE_INDEPENDENT_RESERVE
    default:
      return new IllegalStateError({
        message: 'Could not identify exchange.',
        context: { exchangeID: row.id },
      })
  }
}

const globaluidCache = new Map<Exchange, string>()

const getExchangeUid = async (
  pool: Pool,
  exchange: Exchange,
): Promise<string | Error> => {
  if (globaluidCache.has(exchange)) {
    return globaluidCache.get(exchange)!
  }

  const exchangeUid = await forceGetExchangeUid(pool, exchange)
  if (exchangeUid instanceof Error) {
    return exchangeUid
  }

  globaluidCache.set(exchange, exchangeUid)
  return exchangeUid
}

const getExchange = async (
  pool: Pool,
  exchangeUid: string,
): Promise<Exchange | Error> => {
  for (const entry of globaluidCache.entries()) {
    if (entry[1] === exchangeUid) {
      return entry[0]
    }
  }

  const exchange = await forceGetExchange(pool, exchangeUid)
  if (exchange instanceof Error) {
    return exchange
  }

  globaluidCache.set(exchange, exchangeUid)
  return exchange
}

const getExchangeList = async (pool: Pool): Promise<Exchange[] | Error> => {
  const rows = await errorBoundary(async () =>
    db
      .select('exchange', db.all, {
        columns: ['id', 'name', 'url'],
      })
      .run(pool),
  )
  if (rows instanceof Error) {
    return new DbError({
      message: 'Could not get exchange list.',
      cause: rows,
    })
  }

  return rows.map((row) => {
    return {
      ID: row.id,
      name: row.name,
      url: row.url,
    }
  })
}

export {
  type Exchange,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_DASSET,
  EXCHANGE_INDEPENDENT_RESERVE,
  forceGetExchangeUid,
  forceGetExchange,
  getExchangeUid,
  getExchange,
  getExchangeList,
}
