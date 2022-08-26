import { parseISO } from 'date-fns'
import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { insertTrade } from './insert-trade.js'
import { selectTradesAfterDate } from './select-trades-after-date.js'

test('select trades made after specified date', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()

  const afterDate = parseISO('2021-01-05')

  assertOk(
    await insertTrade(pool, {
      userUid,
      exchangeUid,
      orderUid: undefined,
      tradeID: 'test-trade-id-1',
      primaryCurrency: 'BTC',
      secondaryCurrency: 'NZD',
      type: 'BUY',
      price: 2000,
      volume: 0.5,
      value: 995,
      fee: 5,
      totalValue: 1000,
      timestamp: parseISO('2021-01-04'),
    }),
  )

  const trade = await insertTrade(pool, {
    userUid,
    exchangeUid,
    orderUid: undefined,
    tradeID: 'test-trade-id-2',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    volume: 0.5,
    type: 'BUY',
    price: 1980,
    value: 995,
    fee: 5,
    totalValue: 1000,
    timestamp: parseISO('2021-01-05'),
  })
  assertOk(trade)

  const trades = await selectTradesAfterDate(pool, {
    userUid,
    exchangeUid,
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    type: 'BUY',
    afterDate,
  })
  assertOk(trades)

  t.is(1, trades.length)
  t.is(trade.uid, trades[0]!.uid)
})
