import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

type Market = {
  ID: string
  name: string
}

const MARKET_DASSET: Market = {
  ID: 'dassetx.com',
  name: 'Dasset',
}

const MARKET_BINANCE_US: Market = {
  ID: 'binance.us',
  name: 'Binance.US',
}

const MARKET_KIWI_COIN: Market = {
  ID: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
}

const MARKET_EASY_CRYPTO: Market = {
  ID: 'easycrypto.ai',
  name: 'Easy Crypto',
}

const MARKET_INDEPENDENT_RESERVE: Market = {
  ID: 'independentreserve.com',
  name: 'Independent Reserve',
}

const forceGetMarketUID = async (
  pool: Pool,
  market: Market,
): Promise<string | Error> => {
  const value: s.market.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: market.ID,
    name: market.name,
  }

  const rows = await errorBoundary(async () =>
    db
      .upsert('market', [value], db.constraint('unique_market_id'), {
        updateColumns: ['name', 'updated_at'],
        returning: ['uid'],
      })
      .run(pool),
  )

  if (rows instanceof Error || !rows) {
    return new DBError({
      message: 'Could not upsert market',
      context: { market },
    })
  }

  return rows[0]!.uid
}

const localCache = new Map<Market, string>()

const getMarketUID = async (
  pool: Pool,
  market: Market,
): Promise<string | Error> => {
  if (localCache.has(market)) {
    return localCache.get(market)!
  }

  const marketUID = await forceGetMarketUID(pool, market)
  if (marketUID instanceof Error) {
    return marketUID
  }

  localCache.set(market, marketUID)
  return marketUID
}

export {
  Market,
  MARKET_DASSET,
  MARKET_BINANCE_US,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
  MARKET_INDEPENDENT_RESERVE,
  getMarketUID,
  forceGetMarketUID,
}
