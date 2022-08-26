import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getFxRates } from './get-fx-rates.js'

test('should get fx rates', async (t) => {
  const [result] = await getFxRates()
  assertOk(result)

  t.true(Array.isArray(result))
  for (const item of result) {
    t.is(typeof item.CurrencyCodeA, 'string')
    t.is(typeof item.CurrencyCodeB, 'string')
    t.is(typeof item.Rate, 'number')
  }
})
