import test from 'ava'
import { throwIfErrorSync } from '@stayradiated/error-boundary'

import { getFxRates } from './get-fx-rates.js'

test('should get fx rates', async (t) => {
  const [resultOrError] = await getFxRates()
  const result = throwIfErrorSync(resultOrError)

  t.true(Array.isArray(result))
  for (const item of result) {
    t.is(typeof item.CurrencyCodeA, 'string')
    t.is(typeof item.CurrencyCodeB, 'string')
    t.is(typeof item.Rate, 'number')
  }
})
