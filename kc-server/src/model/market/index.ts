import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

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

const forceGetMarketUID = async (
  pool: Pool,
  market: Market,
): Promise<string | Error> => {
  const insert: s.market.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: market.ID,
    name: market.name,
  }

  const rows = await db.sql<s.market.SQL, s.market.Selectable[]>`
    INSERT INTO ${'market'} (${db.cols(insert)})
    VALUES (${db.vals(insert)})
    ON CONFLICT ON CONSTRAINT unique_market_id 
      DO UPDATE SET
        name = EXCLUDED.name,
        updated_at = EXCLUDED.updated_at
    RETURNING uid
  `.run(pool)

  const row = rows[0]
  if (!row) {
    return new Error('forceGetMarketUID received 0 rows')
  }

  return row.uid
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
  getMarketUID,
  forceGetMarketUID,
}
