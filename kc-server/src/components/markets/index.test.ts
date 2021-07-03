import test from 'ava'

import pool from '../../pg-pool.js'
import { BINANCE_US, DASSET, forceGetMarketUID } from './index.js'

test('forceGetMarketUID: serial', async (t) => {
  const uuidA = await forceGetMarketUID(pool, BINANCE_US)
  const uuidB = await forceGetMarketUID(pool, BINANCE_US)
  t.is(uuidA, uuidB)
})

test('forceGetMarketUID: concurrent', async (t) => {
  const [uuidA, uuidB] = await Promise.all([
    forceGetMarketUID(pool, DASSET),
    forceGetMarketUID(pool, DASSET),
  ])
  t.is(uuidA, uuidB)
})
