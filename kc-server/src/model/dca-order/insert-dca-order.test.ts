import { DateTime } from 'luxon'
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

  const input: InsertDCAOrderOptions = {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    marketUID,
    assetSymbol: 'BTC',
    startAt: DateTime.local(),
    marketOffset: -2,
    dailyAverage: 50,
    minPriceNZD: 0,
    maxPriceNZD: 50_000,
    minAmountNZD: 20,
    maxAmountNZD: 1000,
    enabledAt: DateTime.local(),
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

  const input: InsertDCAOrderOptions = {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    marketUID,
    assetSymbol: 'BTC',
    startAt: DateTime.local(),
    marketOffset: -2,
    dailyAverage: 50,
    minPriceNZD: undefined,
    maxPriceNZD: undefined,
    minAmountNZD: undefined,
    maxAmountNZD: undefined,
    enabledAt: undefined,
  }

  const dcaOrder = await throwIfError<DCAOrder>(insertDCAOrder(pool, input))

  t.like(dcaOrder, input)
  t.is(typeof dcaOrder.UID, 'string')
})
