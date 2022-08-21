import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertDcaOrder, InsertDcaOrderOptions } from './insert-dca-order.js'
import type { DcaOrder } from './types.js'

test('insertDcaOrder', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const marketUid = await make.market()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const input: InsertDcaOrderOptions = {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
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

  const dcaOrder = await throwIfError<DcaOrder>(insertDcaOrder(pool, input))

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.uid, 'string')
})

test('insertDcaOrder (no min/max)', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const marketUid = await make.market()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const primaryCurrencySymbol = await make.primaryCurrency()
  const secondaryCurrencySymbol = await make.secondaryCurrency()

  const input: InsertDcaOrderOptions = {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
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

  const dcaOrder = await throwIfError<DcaOrder>(insertDcaOrder(pool, input))

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.uid, 'string')
})
