import { inspect } from 'util'
import anyTest, { TestInterface } from 'ava'
import { DateTime } from 'luxon'

import { pool } from '../../pool.js'
import * as make from '../../test-utils/make.js'

import { createDCAOrder, CreateDCAOrderOptions } from './create-dca-order.js'

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

test('createDCAOrder', async (t) => {
  const { userUID, exchangeUID, marketUID } = t.context

  const input: CreateDCAOrderOptions = {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.local(),
    marketOffset: -2,
    dailyAverage: 50,
    minPrice: 0,
    maxPrice: 50_000,
    minAmount: 20,
    maxAmount: 1000,
  }

  const dcaOrder = await createDCAOrder(pool, input)
  if (dcaOrder instanceof Error) {
    t.fail(inspect(dcaOrder))
    return
  }

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.UID, 'string')
})
