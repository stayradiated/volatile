import { inspect } from 'node:util'

import { test } from '../../test-util/ava.js'

import { selectAllDcaOrders } from './select-all-dca-orders.js'
import type { InsertDcaOrderOptions } from './insert-dca-order.js'
import { insertDcaOrder } from './insert-dca-order.js'

test('dcaOrder', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const marketUid = await make.market()

  const input: InsertDcaOrderOptions = {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    startAt: new Date(),
    dailyAverage: 10,
    marketOffset: -10,
    intervalMs: 1000 * 60 * 5,
    minPrice: 0,
    maxPrice: 10_000,
    minValue: 0,
    maxValue: 1000,
    enabledAt: new Date(),
    nextRunAt: undefined,
    lastRunAt: undefined,
  }

  await insertDcaOrder(pool, input)

  const dcaOrderList = await selectAllDcaOrders(pool, {
    userUid,
    enabled: true,
  })
  if (dcaOrderList instanceof Error) {
    t.fail(inspect(dcaOrderList))
    return
  }

  t.is(1, dcaOrderList.length)
  t.like(dcaOrderList[0], input)
})
