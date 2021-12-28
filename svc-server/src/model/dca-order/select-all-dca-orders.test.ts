import { inspect } from 'util'

import { test } from '../../test-util/ava.js'

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

  await insertDCAOrder(pool, input)

  const dcaOrderList = await selectAllDCAOrders(pool, {
    userUID,
    enabled: true,
  })
  if (dcaOrderList instanceof Error) {
    t.fail(inspect(dcaOrderList))
    return
  }

  t.is(1, dcaOrderList.length)
  t.like(dcaOrderList[0], input)
})
