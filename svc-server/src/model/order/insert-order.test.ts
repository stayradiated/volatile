import * as db from 'zapatos/db'
import { assertOk } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import type { InsertOrderOptions } from './insert-order.js'
import { insertOrder } from './insert-order.js'

test('insertOrder', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()

  const input: InsertOrderOptions = {
    userUid,
    exchangeUid,
    orderId: 'insert-order',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    price: 50_000,
    volume: 2,
    value: 100_000,
    type: 'SELL',
    openedAt: new Date(),
    closedAt: undefined,
  }

  const result = await insertOrder(pool, input)
  assertOk(result)

  t.like(result, input)
  t.is('string', typeof result.uid)

  const row = await db.selectExactlyOne('order', { uid: result.uid }).run(pool)
  t.like(row, {
    order_id: input.orderId,
    uid: result.uid,
    type: input.type,
    price: input.price,
    volume: input.volume,
    value: input.value,
    primary_currency: input.primaryCurrency,
    secondary_currency: input.secondaryCurrency,
    user_uid: input.userUid,
    closed_at: null,
    exchange_uid: input.exchangeUid,
  })

  t.is(input.openedAt.valueOf(), parseISO(row.opened_at).valueOf())
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
