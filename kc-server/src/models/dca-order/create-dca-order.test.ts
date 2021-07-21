import { inspect } from 'util'
import { DateTime } from 'luxon'

import test from '../../test-utils/ava.js'

import { createDCAOrder, CreateDCAOrderOptions } from './create-dca-order.js'

test('createDCAOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const marketUID = await make.market()

  const input: CreateDCAOrderOptions = {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.local(),
    marketOffset: -2,
    dailyAverage: 50,
    minPriceNZD: 0,
    maxPriceNZD: 50_000,
    minAmountNZD: 20,
    maxAmountNZD: 1000,
  }

  const dcaOrder = await createDCAOrder(pool, input)
  if (dcaOrder instanceof Error) {
    t.fail(inspect(dcaOrder))
    return
  }

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.UID, 'string')
})
