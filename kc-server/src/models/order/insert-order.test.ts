import { inspect } from 'util'
import { DateTime } from 'luxon'
import * as db from 'zapatos/db'

import test from '../../test-utils/ava.js'

import { insertOrder } from './insert-order.js'
import { OrderType } from './types.js'

test('insertOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const input = {
    userUID,
    exchangeUID,
    ID: 'insert-order',
    symbol: 'BTC',
    price: 50_000,
    amount: 2,
    type: OrderType.SELL,
    openedAt: DateTime.local(),
    closedAt: undefined,
  }

  const result = await insertOrder(pool, input)
  if (result instanceof Error) {
    t.fail(inspect(result))
    return
  }

  t.like(result, input)
  t.is('string', typeof result.UID)

  const row = await db.selectExactlyOne('order', { uid: result.UID }).run(pool)
  t.like(row, {
    id: input.ID,
    uid: result.UID,
    type: input.type,
    price: input.price,
    amount: input.amount,
    symbol: input.symbol,
    user_uid: input.userUID,
    closed_at: null,
    exchange_uid: input.exchangeUID,
  })

  t.is(input.openedAt.valueOf(), DateTime.fromISO(row.opened_at).valueOf())
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
