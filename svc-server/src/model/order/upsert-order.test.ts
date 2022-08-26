import * as db from 'zapatos/db'
import { assertOk } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import type { UpsertOrderOptions } from './upsert-order.js'
import { upsertOrder } from './upsert-order.js'

test('upsertOrder', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()

  const original: UpsertOrderOptions = {
    userUid,
    exchangeUid,
    orderId: 'upsert-order',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    price: 50_000,
    volume: 2,
    value: 100_000,
    type: 'SELL',
    openedAt: new Date(),
    closedAt: undefined,
  }

  const rowUid = await upsertOrder(pool, original)
  assertOk(rowUid)
  t.is('string', typeof rowUid)

  const rowV1 = await db.selectExactlyOne('order', { uid: rowUid }).run(pool)
  t.like(rowV1, {
    order_id: original.orderId,
    uid: rowUid,
    type: original.type,
    price: original.price,
    volume: original.volume,
    value: original.value,
    primary_currency: original.primaryCurrency,
    secondary_currency: original.secondaryCurrency,
    user_uid: original.userUid,
    closed_at: null,
    exchange_uid: original.exchangeUid,
  })
  t.is(
    original.openedAt.valueOf(),
    parseISO(rowV1.opened_at).valueOf(),
    'original.opened_at',
  )
  t.is('string', typeof rowV1.created_at)
  t.is('string', typeof rowV1.updated_at)

  const mutate: UpsertOrderOptions = {
    userUid,
    exchangeUid,
    orderId: 'upsert-order',

    primaryCurrency: 'ETH',
    secondaryCurrency: 'NZD',
    price: 20_000,
    volume: 55,
    value: 1_100_000,
    type: 'BUY',
    openedAt: new Date(),
    closedAt: new Date(),
  }

  const mutateUid = await upsertOrder(pool, mutate)
  assertOk(mutateUid)
  t.is(rowUid, mutateUid)

  const rowV2 = await db.selectExactlyOne('order', { uid: rowUid }).run(pool)
  t.like(rowV2, {
    uid: rowUid,
    user_uid: original.userUid,
    exchange_uid: original.exchangeUid,

    order_id: original.orderId,
    type: mutate.type,
    price: mutate.price,
    volume: mutate.volume,
    value: mutate.value,
    primary_currency: mutate.primaryCurrency,
    secondary_currency: mutate.secondaryCurrency,
  })
  t.is(
    mutate.openedAt.valueOf(),
    parseISO(rowV2.opened_at).valueOf(),
    'mutate.opened_at',
  )
  t.is(
    mutate.closedAt!.valueOf(),
    parseISO(rowV2.closed_at!).valueOf(),
    'mutate.closed_at',
  )
})
