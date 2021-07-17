import { inspect } from 'util'
import anyTest, { TestInterface } from 'ava'
import { DateTime } from 'luxon'

import * as make from '../../test-utils/make.js'

import { pool } from '../../pool.js'
import { getAllDCAOrders } from './get-all-dca-orders.js'
import { createDCAOrder } from './create-dca-order.js'

const test = anyTest as TestInterface<{
  userUID: string
  exchangeUID: string
  marketUID: string
}>

test.before(async (t) => {
  t.context = {
    userUID: await make.user(),
    exchangeUID: await make.exchange(),
    marketUID: await make.market(),
  }
})

test('dcaOrder', async (t) => {
  const { userUID, exchangeUID, marketUID } = t.context

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
