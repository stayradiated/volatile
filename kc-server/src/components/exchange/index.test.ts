import test from 'ava'

import { pool } from '../../pool.js'
import { EXCHANGE_KIWI_COIN, forceGetExchangeUID } from './index.js'

test('forceGetExchangeUID: serial', async (t) => {
  const uuidA = await forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN)
  const uuidB = await forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN)
  t.is(uuidA, uuidB)
})

test('forceGetExchangeUID: concurrent', async (t) => {
  const [uuidA, uuidB] = await Promise.all([
    forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN),
    forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN),
  ])
  t.is(uuidA, uuidB)
})
