import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { insertOrder, InsertOrderOptions } from './insert-order.js'
import type { Order } from './types.js'

test('insertOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const input: InsertOrderOptions = {
    userUID,
    exchangeUID,
    orderID: 'insert-order',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    price: 50_000,
    volume: 2,
    value: 100_000,
    type: 'SELL',
    openedAt: new Date(),
    closedAt: undefined,
  }

  const result = await throwIfError<Order>(insertOrder(pool, input))

  t.like(result, input)
  t.is('string', typeof result.UID)

  const row = await db.selectExactlyOne('order', { uid: result.UID }).run(pool)
  t.like(row, {
    order_id: input.orderID,
    uid: result.UID,
    type: input.type,
    price: input.price,
    volume: input.volume,
    value: input.value,
    primary_currency: input.primaryCurrency,
    secondary_currency: input.secondaryCurrency,
    user_uid: input.userUID,
    closed_at: null,
    exchange_uid: input.exchangeUID,
  })

  t.is(input.openedAt.valueOf(), parseISO(row.opened_at).valueOf())
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
