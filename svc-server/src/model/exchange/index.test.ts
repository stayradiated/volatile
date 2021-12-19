import { inspect } from 'util'

import { test } from '../../test-util/ava.js'

import {
  EXCHANGE_KIWI_COIN,
  forceGetExchangeUID,
  forceGetExchange,
  getExchange,
  getExchangeUID,
} from './index.js'

test('forceGetExchangeUID: serial', async (t) => {
  const { pool } = t.context
  const uuidA = await forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN)
  const uuidB = await forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN)
  t.is(uuidA, uuidB)
})

test('forceGetExchangeUID: concurrent', async (t) => {
  const { pool } = t.context
  const [uuidA, uuidB] = await Promise.all([
    forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN),
    forceGetExchangeUID(pool, EXCHANGE_KIWI_COIN),
  ])
  t.is(uuidA, uuidB)
})

test('forceGetExchange', async (t) => {
  const { pool } = t.context
  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    t.fail(inspect(exchangeUID))
    return
  }

  const exchange = await forceGetExchange(pool, exchangeUID)
  t.is(exchange, EXCHANGE_KIWI_COIN)
})

test('getExchangeUID + getExchange', async (t) => {
  const { pool } = t.context
  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    t.fail(inspect(exchangeUID))
    return
  }

  const exchange = await getExchange(pool, exchangeUID)
  if (exchange instanceof Error) {
    t.fail(inspect(exchange))
    return
  }

  t.is(exchange, EXCHANGE_KIWI_COIN)
})
