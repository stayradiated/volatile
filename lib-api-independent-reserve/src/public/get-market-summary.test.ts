import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getMarketSummary } from './get-market-summary.js'

test('should get market summary', async (t) => {
  const [result] = await getMarketSummary({
    primaryCurrencyCode: 'Xbt',
    secondaryCurrencyCode: 'Nzd',
  })
  assertOk(result)

  t.is(typeof result.DayHighestPrice, 'number')
  t.is(typeof result.DayLowestPrice, 'number')
  t.is(typeof result.DayAvgPrice, 'number')
  t.is(typeof result.DayVolumeXbt, 'number')
  t.is(typeof result.DayVolumeXbtInSecondaryCurrrency, 'number')
  t.is(typeof result.CurrentLowestOfferPrice, 'number')
  t.is(typeof result.CurrentHighestBidPrice, 'number')
  t.is(typeof result.LastPrice, 'number')
  t.is(result.PrimaryCurrencyCode, 'Xbt')
  t.is(result.SecondaryCurrencyCode, 'Nzd')
  t.is(typeof result.CreatedTimestampUtc, 'string')
})
