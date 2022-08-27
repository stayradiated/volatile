import * as db from 'zapatos/db'
import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import type { InsertDcaOrderHistoryOptions } from './insert-dca-order-history.js'
import { insertDcaOrderHistory } from './insert-dca-order-history.js'

test('insertDcaOrderHistory', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const dcaOrderUid = await make.dcaOrder()
  const orderUid = await make.order()

  const input: InsertDcaOrderHistoryOptions = {
    userUid,
    dcaOrderUid,
    orderUid,
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

  const result = await insertDcaOrderHistory(pool, input)
  assertOk(result)

  t.like(result, input)
  t.is('string', typeof result.uid)

  const row = await db
    .selectExactlyOne('dca_order_history', { uid: result.uid })
    .run(pool)

  t.like(row, {
    user_uid: input.userUid,
    dca_order_uid: input.dcaOrderUid,
    order_uid: input.orderUid,
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
