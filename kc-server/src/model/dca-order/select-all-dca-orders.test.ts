import { inspect } from 'util'
import { DateTime } from 'luxon'

import test from '../../test-util/ava.js'

import { selectAllDCAOrders } from './select-all-dca-orders.js'
import { insertDCAOrder, InsertDCAOrderOptions } from './insert-dca-order.js'

test('dcaOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()

  const input: InsertDCAOrderOptions = {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    marketUID,
    symbol: 'BTC',
    startAt: DateTime.local(),
    dailyAverage: 10,
    marketOffset: -10,
    minPriceNZD: 0,
    maxPriceNZD: 10_000,
    minAmountNZD: 0,
    maxAmountNZD: 1000,
  }

  await insertDCAOrder(pool, input)

  const dcaOrderList = await selectAllDCAOrders(pool, {
    userUID,
  })
  if (dcaOrderList instanceof Error) {
    t.fail(inspect(dcaOrderList))
    return
  }

  t.is(1, dcaOrderList.length)
  t.like(dcaOrderList[0], input)
})
