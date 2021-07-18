import { inspect } from 'util'
import { DateTime } from 'luxon'

import test from '../../test-utils/ava.js'

import { getAllDCAOrders } from './get-all-dca-orders.js'
import { createDCAOrder } from './create-dca-order.js'

test('dcaOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const marketUID = await make.market()

  const input = {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.local(),
    dailyAverage: 10,
    marketOffset: -10,
    minPrice: 0,
    maxPrice: 10_000,
    minAmount: 0,
    maxAmount: 1000,
  }

  await createDCAOrder(pool, input)

  const dcaOrderList = await getAllDCAOrders(pool, {
    userUID,
  })
  if (dcaOrderList instanceof Error) {
    t.fail(inspect(dcaOrderList))
    return
  }

  t.is(1, dcaOrderList.length)
  t.like(dcaOrderList[0], input)
})
