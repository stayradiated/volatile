import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import {
  getTradeHistorySummary,
  GetTradeHistorySummaryResult,
} from './get-trade-history-summary.js'

test('should get history summary', async (t) => {
  const [resultOrError] = await getTradeHistorySummary({
    primaryCurrencyCode: 'Xbt',
    secondaryCurrencyCode: 'Nzd',
    numberOfHoursInThePastToRetrieve: 1,
  })
  const result = throwIfError<GetTradeHistorySummaryResult>(resultOrError)

  t.true(Array.isArray(result.HistorySummaryItems))
  t.is(result.NumberOfHoursInThePastToRetrieve, 1)
  t.is(result.PrimaryCurrencyCode, 'Xbt')
  t.is(result.SecondaryCurrencyCode, 'Nzd')
  t.is(typeof result.CreatedTimestampUtc, 'string')

  const item = result.HistorySummaryItems[0]!
  t.is(typeof item.StartTimestampUtc, 'string')
  t.is(typeof item.EndTimestampUtc, 'string')
  t.is(typeof item.PrimaryCurrencyVolume, 'number')
  t.is(typeof item.SecondaryCurrencyVolume, 'number')
  t.is(typeof item.NumberOfTrades, 'number')
  t.is(typeof item.HighestSecondaryCurrencyPrice, 'number')
  t.is(typeof item.LowestSecondaryCurrencyPrice, 'number')
  t.is(typeof item.ClosingSecondaryCurrencyPrice, 'number')
  t.is(typeof item.AverageSecondaryCurrencyPrice, 'number')
})
