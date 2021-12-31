import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getRecentTrades, GetRecentTradesResult } from './get-recent-trades.js'

test('should get recent trades', async (t) => {
  const [resultOrError] = await getRecentTrades({
    primaryCurrencyCode: 'Xbt',
    secondaryCurrencyCode: 'Nzd',
    numberOfRecentTradesToRetrieve: 1,
  })
  const result = throwIfError<GetRecentTradesResult>(resultOrError)

  t.is(result.PrimaryCurrencyCode, 'Xbt')
  t.is(result.SecondaryCurrencyCode, 'Nzd')
  t.is(typeof result.CreatedTimestampUtc, 'string')
  t.true(Array.isArray(result.Trades))

  const trade = result.Trades[0]!
  t.is(typeof trade.TradeTimestampUtc, 'string')
  t.is(typeof trade.PrimaryCurrencyAmount, 'number')
  t.is(typeof trade.SecondaryCurrencyTradePrice, 'number')
})
