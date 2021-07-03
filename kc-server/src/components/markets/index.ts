import mem from 'mem'
import { v4 as createUUID } from 'uuid'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import type { Pool } from '../../types.js'

type Market = {
  id: string
  name: string
}

const DASSET: Market = {
  id: 'dassetx.com',
  name: 'Dasset',
}

const BINANCE_US: Market = {
  id: 'binance.us',
  name: 'Binance.US',
}

const KIWI_COIN: Market = {
  id: 'kiwi-coin.com',
  name: 'Kiwi-Coin',
}

const EASY_CRYPTO: Market = {
  id: 'easycrypto.ai',
  name: 'Easy Crypto',
}

const forceGetMarketUUID = async (
  pool: Pool,
  market: Market,
): Promise<string> => {
  const insert: s.market.Insertable = {
    uid: createUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    id: market.id,
    name: market.name,
  }

  const rows = await db.sql<s.market.SQL, s.market.Selectable[]>`
    INSERT INTO ${'market'} (${db.cols(insert)})
    VALUES (${db.vals(insert)})
    ON CONFLICT ON CONSTRAINT market_id_key 
      DO UPDATE SET
        name = EXCLUDED.name,
        updated_at = EXCLUDED.updated_at
    RETURNING uid
  `.run(pool)

  const row = rows[0] as { uid: string }
  if (!row) {
    throw new Error('forceGetMarketUUID received 0 rows')
  }

  return row.uid
}

const getMarketUUID = mem(forceGetMarketUUID, {
  cacheKey: ([_, market]) => market,
})

export {
  Market,
  DASSET,
  BINANCE_US,
  KIWI_COIN,
  EASY_CRYPTO,
  getMarketUUID,
  forceGetMarketUUID,
}
