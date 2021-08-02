import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import test from '../../test-utils/ava.js'

import { insertTrade } from './insert-trade.js'
import { selectTradesAfterDate } from './select-trades-after-date.js'
import type { Trade } from './types.js'

test('select trades made after specified date', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const afterDate = DateTime.fromISO('2021-01-05')

  await throwIfError<Trade>(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID: undefined,
      tradeID: 'test-trade-id-1',
      symbol: 'BTC',
      amount: 0.5,
      type: 'BUY',
      priceNZD: 1000,
      totalNZD: 1005,
      feeNZD: 5,
      timestamp: DateTime.fromISO('2021-01-04'),
    }),
  )

  const trade = await throwIfError<Trade>(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID: undefined,
      tradeID: 'test-trade-id-2',
      symbol: 'BTC',
      amount: 0.5,
      type: 'BUY',
      priceNZD: 1000,
      totalNZD: 1005,
      feeNZD: 5,
      timestamp: DateTime.fromISO('2021-01-05'),
    }),
  )

  const trades = await throwIfError<Trade[]>(
    selectTradesAfterDate(pool, {
      userUID,
      exchangeUID,
      symbol: 'BTC',
      type: 'BUY',
      afterDate,
    }),
  )

  t.is(1, trades.length)
  t.is(trade.UID, trades[0]!.UID)
})
