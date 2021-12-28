import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertDCAOrder, InsertDCAOrderOptions } from './insert-dca-order.js'
import type { DCAOrder } from './types.js'

test('insertDCAOrder', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const marketUID = await make.market()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const input: InsertDCAOrderOptions = {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    marketUID,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt: new Date(),
    marketOffset: -2,
    dailyAverage: 50,
    intervalMs: 1000 * 60 * 5,
    minPrice: 0,
    maxPrice: 50_000,
    minValue: 20,
    maxValue: 1000,
    enabledAt: new Date(),
    nextRunAt: undefined,
    lastRunAt: undefined,
  }

  const dcaOrder = await throwIfError<DCAOrder>(insertDCAOrder(pool, input))

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.UID, 'string')
})

test('insertDCAOrder (no min/max)', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const marketUID = await make.market()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const input: InsertDCAOrderOptions = {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    marketUID,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt: new Date(),
    marketOffset: -2,
    dailyAverage: 50,
    intervalMs: 1000 * 60 * 5,
    minPrice: undefined,
    maxPrice: undefined,
    minValue: undefined,
    maxValue: undefined,
    enabledAt: undefined,
    nextRunAt: undefined,
    lastRunAt: undefined,
  }

  const dcaOrder = await throwIfError<DCAOrder>(insertDCAOrder(pool, input))

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.UID, 'string')
})
