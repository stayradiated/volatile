import { assertOk } from '@stayradiated/error-boundary'
import { subDays } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { insertTrade } from '../trade/index.js'
import { getDcaOrderTargetValue } from './get-dca-order-target-value.js'
import { insertDcaOrder } from './insert-dca-order.js'
import { selectDcaOrder } from './select-dca-order.js'

test('should calculate without trades', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const marketUid = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100

  const currentTime = new Date()
  const startAt = subDays(currentTime, 1)

  const dcaOrder = await insertDcaOrder(pool, {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt,
    marketOffset: 0,
    dailyAverage,
    intervalMs: 1000 * 60 * 5,
    minPrice: undefined,
    maxPrice: undefined,
    minValue: undefined,
    maxValue: undefined,
    enabledAt: undefined,
    nextRunAt: undefined,
    lastRunAt: undefined,
  })

  assertOk(dcaOrder)

  const sum = await getDcaOrderTargetValue(pool, dcaOrder, currentTime)

  assertOk(sum)
  t.is(dailyAverage, sum)
})

test('should calculate with multiple trades', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const marketUid = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100
  const tradedValue = 90

  const currentTime = new Date()
  const startAt = subDays(currentTime, 1)

  const dcaOrder = await insertDcaOrder(pool, {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt,
    marketOffset: 0,
    dailyAverage,
    intervalMs: 1000 * 60 * 5,
    minPrice: undefined,
    maxPrice: undefined,
    minValue: undefined,
    maxValue: undefined,
    enabledAt: undefined,
    nextRunAt: undefined,
    lastRunAt: undefined,
  })

  assertOk(dcaOrder)

  assertOk(
    await insertTrade(pool, {
      userUid,
      exchangeUid,
      orderUid: undefined,
      timestamp: new Date(),
      tradeID: 'dca-order-trade-1',
      type: 'BUY',
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      volume: 0.4,
      price: 1000,
      fee: 10,
      value: tradedValue / 2 - 10,
      totalValue: tradedValue / 2,
    }),
  )

  assertOk(
    await insertTrade(pool, {
      userUid,
      exchangeUid,
      orderUid: undefined,
      timestamp: new Date(),
      tradeID: 'dca-order-trade-2',
      type: 'BUY',
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      volume: 0.4,
      price: 1000,
      fee: 10,
      value: tradedValue / 2 - 10,
      totalValue: tradedValue / 2,
    }),
  )

  const sum = await getDcaOrderTargetValue(pool, dcaOrder, currentTime)

  assertOk(sum)
  t.is(dailyAverage - tradedValue, sum)
})

test('should ignore minValue', async (t) => {
  const { pool, make } = t.context

  const currentTime = new Date()
  const startAt = subDays(currentTime, 1)
  const dailyAverage = 100

  const dcaOrderUid = await make.dcaOrder({
    startAt,
    dailyAverage,
  })
  const dcaOrder = await selectDcaOrder(pool, dcaOrderUid)

  assertOk(dcaOrder)

  const sum = await getDcaOrderTargetValue(pool, dcaOrder, currentTime)

  assertOk(sum)
  t.is(dailyAverage, sum)
})

test('should cap target at maxValue', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const marketUid = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100

  const currentTime = new Date()
  const startAt = subDays(currentTime, 1)

  const dcaOrder = await insertDcaOrder(pool, {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt,
    marketOffset: 0,
    dailyAverage,
    intervalMs: 1000 * 60 * 5,
    minPrice: undefined,
    maxPrice: undefined,
    minValue: undefined,
    maxValue: undefined,
    enabledAt: undefined,
    nextRunAt: undefined,
    lastRunAt: undefined,
  })

  assertOk(dcaOrder)

  const sum = await getDcaOrderTargetValue(pool, dcaOrder, currentTime)

  assertOk(sum)
  t.is(dailyAverage, sum)
})
