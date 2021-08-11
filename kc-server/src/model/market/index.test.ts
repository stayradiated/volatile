import { test } from '../../test-util/ava.js'

import { pool } from '../../pool.js'
import { MARKET_BINANCE_US, MARKET_DASSET, forceGetMarketUID } from './index.js'

test('forceGetMarketUID: serial', async (t) => {
  const uuidA = await forceGetMarketUID(pool, MARKET_BINANCE_US)
  const uuidB = await forceGetMarketUID(pool, MARKET_BINANCE_US)
  t.is(uuidA, uuidB)
})

test('forceGetMarketUID: concurrent', async (t) => {
  const [uuidA, uuidB] = await Promise.all([
    forceGetMarketUID(pool, MARKET_DASSET),
    forceGetMarketUID(pool, MARKET_DASSET),
  ])
  t.is(uuidA, uuidB)
})
