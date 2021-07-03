import test from 'ava'

import pool from '../../pg-pool.js'
import { BINANCE_US, DASSET, forceGetMarketUUID } from './index.js'

test('forceGetMarketUUID: serial', async (t) => {
  const uuidA = await forceGetMarketUUID(pool, BINANCE_US)
  const uuidB = await forceGetMarketUUID(pool, BINANCE_US)
  t.is(uuidA, uuidB)
})

test('forceGetMarketUUID: concurrent', async (t) => {
  const [uuidA, uuidB] = await Promise.all([
    forceGetMarketUUID(pool, DASSET),
    forceGetMarketUUID(pool, DASSET),
  ])
  t.is(uuidA, uuidB)
})
