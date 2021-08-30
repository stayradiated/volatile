import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertTrade } from '../trade/index.js'
import { getDCAOrderTargetAmountNZD } from './get-dca-order-target-amount-nzd.js'
import { insertDCAOrder } from './insert-dca-order.js'
import { selectDCAOrder } from './select-dca-order.js'
import type { DCAOrder } from './types.js'

test('should calculate without trades', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()

  const dailyAverage = 100

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      assetSymbol: 'BTC',
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPriceNZD: undefined,
      maxPriceNZD: undefined,
      minAmountNZD: undefined,
      maxAmountNZD: undefined,
      enabledAt: undefined,
    }),
  )

  const sum = await getDCAOrderTargetAmountNZD(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})

test('should calculate with multiple trade', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()

  const dailyAverage = 100
  const tradedTotal = 90

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      assetSymbol: 'BTC',
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPriceNZD: undefined,
      maxPriceNZD: undefined,
      minAmountNZD: undefined,
      maxAmountNZD: undefined,
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
      assetSymbol: 'BTC',
      amount: 0.4,
      priceNZD: 1000,
      feeNZD: 10,
      totalNZD: tradedTotal / 2,
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
      assetSymbol: 'BTC',
      amount: 0.4,
      priceNZD: 1000,
      feeNZD: 10,
      totalNZD: tradedTotal / 2,
    }),
  )

  const sum = await getDCAOrderTargetAmountNZD(pool, dcaOrder, currentTime)
  t.is(dailyAverage - tradedTotal, sum)
})

test('should ignore minAmountNZD', async (t) => {
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

  const sum = await getDCAOrderTargetAmountNZD(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})

test('should cap target at maxAmountNZD', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const marketUID = await make.market()

  const dailyAverage = 100

  const currentTime = DateTime.local()
  const startAt = currentTime.minus({ days: 1 })

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      assetSymbol: 'BTC',
      startAt,
      marketOffset: 0,
      dailyAverage,
      minPriceNZD: undefined,
      maxPriceNZD: undefined,
      minAmountNZD: undefined,
      maxAmountNZD: undefined,
      enabledAt: undefined,
    }),
  )

  const sum = await getDCAOrderTargetAmountNZD(pool, dcaOrder, currentTime)
  t.is(dailyAverage, sum)
})
