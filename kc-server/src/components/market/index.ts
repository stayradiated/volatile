import { randomUUID } from 'crypto'
import pmem from 'p-memoize'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { throwIfError } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type Market = {
  id: string
  name: string
}

const MARKET_DASSET: Market = {
  id: 'dassetx.com',
  name: 'Dasset',
}

const MARKET_BINANCE_US: Market = {
  id: 'binance.us',
  name: 'Binance.US',
}

const MARKET_KIWI_COIN: Market = {
  id: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
}

const MARKET_EASY_CRYPTO: Market = {
  id: 'easycrypto.ai',
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
    id: market.id,
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

const forceGetMarketUIDOrThrow = async (
  pool: Pool,
  market: Market,
): Promise<string> => throwIfError<string>(forceGetMarketUID(pool, market))

const getMarketUID = pmem(forceGetMarketUIDOrThrow, {
  cacheKey: ([_, market]) => market,
})

export {
  Market,
  MARKET_DASSET,
  MARKET_BINANCE_US,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
  getMarketUID,
  forceGetMarketUID,
}
