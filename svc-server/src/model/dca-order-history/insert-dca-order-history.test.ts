import { inspect } from 'util'
import * as db from 'zapatos/db'

import { test } from '../../test-util/ava.js'

import {
  insertDCAOrderHistory,
  InsertDCAOrderHistoryOptions,
} from './insert-dca-order-history.js'

test('insertDCAOrderHistory', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const dcaOrderUID = await make.dcaOrder()
  const orderUID = await make.order()

  const input: InsertDCAOrderHistoryOptions = {
    userUID,
    dcaOrderUID,
    orderUID,
    createdAt: new Date(),
    updatedAt: new Date(),
    primaryCurrency: 'BTC',
    secondaryCurrency: '',
    marketPrice: 54_321,
    marketOffset: -1.234,
    targetValue: 33.33,
    value: 22.22,
    availableBalance: 54.32,
    description: 'test entry',
  }

  const result = await insertDCAOrderHistory(pool, input)
  if (result instanceof Error) {
    t.fail(inspect(result))
    return
  }

  t.like(result, input)
  t.is('string', typeof result.UID)

  const row = await db
    .selectExactlyOne('dca_order_history', { uid: result.UID })
    .run(pool)

  t.like(row, {
    user_uid: input.userUID,
    dca_order_uid: input.dcaOrderUID,
    order_uid: input.orderUID,
    primary_currency: input.primaryCurrency,
    secondary_currency: input.secondaryCurrency,
    market_price: input.marketPrice,
    market_offset: input.marketOffset,
    target_value: input.targetValue,
    value: input.value,
    available_balance: input.availableBalance,
    description: input.description,
  })

  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
