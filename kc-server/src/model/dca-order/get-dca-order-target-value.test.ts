import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertTrade } from '../trade/index.js'
import { getDCAOrderTargetValue } from './get-dca-order-target-value.js'
import { insertDCAOrder } from './insert-dca-order.js'
import { selectDCAOrder } from './select-dca-order.js'
import type { DCAOrder } from './types.js'

test('should calculate without trades', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPrice: undefined,
      maxPrice: undefined,
      minValue: undefined,
      maxValue: undefined,
      enabledAt: undefined,
    }),
  )

  const sum = await getDCAOrderTargetValue(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})

test('should calculate with multiple trades', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100
  const tradedValue = 90

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPrice: undefined,
      maxPrice: undefined,
      minValue: undefined,
      maxValue: undefined,
      enabledAt: undefined,
    }),
  )

  await throwIfError(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID: undefined,
      timestamp: DateTime.local(),
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

  await throwIfError(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID: undefined,
      timestamp: DateTime.local(),
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

  const sum = await getDCAOrderTargetValue(pool, dcaOrder, currentTime)
  t.is(dailyAverage - tradedValue, sum)
})

test('should ignore minValue', async (t) => {
  const { pool, make } = t.context

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })
  const dailyAverage = 100

  const dcaOrderUID = await make.dcaOrder({
    startAt,
    dailyAverage,
  })
  const dcaOrder = await throwIfError<DCAOrder>(
    selectDCAOrder(pool, dcaOrderUID),
  )

  const sum = await getDCAOrderTargetValue(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})

test('should cap target at maxValue', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const dailyAverage = 100

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPrice: undefined,
      maxPrice: undefined,
      minValue: undefined,
      maxValue: undefined,
      enabledAt: undefined,
    }),
  )

  const sum = await getDCAOrderTargetValue(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})
