import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { upsertOrder, UpsertOrderOptions } from './upsert-order.js'

test('upsertOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const original: UpsertOrderOptions = {
    userUID,
    exchangeUID,
    orderID: 'upsert-order',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    price: 50_000,
    volume: 2,
    value: 100_000,
    type: 'SELL',
    openedAt: new Date(),
    closedAt: undefined,
  }

  const rowUID = await throwIfError<string>(upsertOrder(pool, original))
  t.is('string', typeof rowUID)

  {
    const row = await db.selectExactlyOne('order', { uid: rowUID }).run(pool)
    t.like(row, {
      order_id: original.orderID,
      uid: rowUID,
      type: original.type,
      price: original.price,
      volume: original.volume,
      value: original.value,
      primary_currency: original.primaryCurrency,
      secondary_currency: original.secondaryCurrency,
      user_uid: original.userUID,
      closed_at: null,
      exchange_uid: original.exchangeUID,
    })
    t.is(
      original.openedAt.valueOf(),
      parseISO(row.opened_at).valueOf(),
      'original.opened_at',
    )
    t.is('string', typeof row.created_at)
    t.is('string', typeof row.updated_at)
  }

  const mutate: UpsertOrderOptions = {
    userUID,
    exchangeUID,
    orderID: 'upsert-order',

    primaryCurrency: 'ETH',
    secondaryCurrency: 'NZD',
    price: 20_000,
    volume: 55,
    value: 1_100_000,
    type: 'BUY',
    openedAt: new Date(),
    closedAt: new Date(),
  }

  const mutateUID = await throwIfError<string>(upsertOrder(pool, mutate))
  t.is(rowUID, mutateUID)

  {
    const row = await db.selectExactlyOne('order', { uid: rowUID }).run(pool)
    t.like(row, {
      uid: rowUID,
      user_uid: original.userUID,
      exchange_uid: original.exchangeUID,

      order_id: original.orderID,
      type: mutate.type,
      price: mutate.price,
      volume: mutate.volume,
      value: mutate.value,
      primary_currency: mutate.primaryCurrency,
      secondary_currency: mutate.secondaryCurrency,
    })
    t.is(
      mutate.openedAt.valueOf(),
      parseISO(row.opened_at).valueOf(),
      'mutate.opened_at',
    )
    t.is(
      mutate.closedAt!.valueOf(),
      parseISO(row.closed_at!).valueOf(),
      'mutate.closed_at',
    )
  }
})
