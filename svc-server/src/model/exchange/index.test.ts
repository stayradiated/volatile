import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import {
  EXCHANGE_KIWI_COIN,
  forceGetExchangeUid,
  forceGetExchange,
  getExchange,
  getExchangeUid,
} from './index.js'

test('forceGetExchangeUid: serial', async (t) => {
  const { pool } = t.context
  const uuidA = await forceGetExchangeUid(pool, EXCHANGE_KIWI_COIN)
  const uuidB = await forceGetExchangeUid(pool, EXCHANGE_KIWI_COIN)
  t.is(uuidA, uuidB)
})

test('forceGetExchangeUid: concurrent', async (t) => {
  const { pool } = t.context
  const [uuidA, uuidB] = await Promise.all([
    forceGetExchangeUid(pool, EXCHANGE_KIWI_COIN),
    forceGetExchangeUid(pool, EXCHANGE_KIWI_COIN),
  ])
  t.is(uuidA, uuidB)
})

test('forceGetExchange', async (t) => {
  const { pool } = t.context
  const exchangeUid = await getExchangeUid(pool, EXCHANGE_KIWI_COIN)
  assertOk(exchangeUid)

  const exchange = await forceGetExchange(pool, exchangeUid)
  t.is(exchange, EXCHANGE_KIWI_COIN)
})

test('getExchangeUid + getExchange', async (t) => {
  const { pool } = t.context
  const exchangeUid = await getExchangeUid(pool, EXCHANGE_KIWI_COIN)
  assertOk(exchangeUid)

  const exchange = await getExchange(pool, exchangeUid)
  assertOk(exchange)

  t.is(exchange, EXCHANGE_KIWI_COIN)
})
