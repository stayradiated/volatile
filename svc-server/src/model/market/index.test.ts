import { test } from '../../test-util/ava.js'

import { pool } from '../../pool.js'
import { MARKET_BINANCE_US, MARKET_DASSET, forceGetMarketUid } from './index.js'

test('forceGetMarketUid: serial', async (t) => {
  const uuidA = await forceGetMarketUid(pool, MARKET_BINANCE_US)
  const uuidB = await forceGetMarketUid(pool, MARKET_BINANCE_US)
  t.is(uuidA, uuidB)
})

test('forceGetMarketUid: concurrent', async (t) => {
  const [uuidA, uuidB] = await Promise.all([
    forceGetMarketUid(pool, MARKET_DASSET),
    forceGetMarketUid(pool, MARKET_DASSET),
  ])
  t.is(uuidA, uuidB)
})
