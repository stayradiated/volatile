import test from 'ava'
import { assertError } from '@stayradiated/error-boundary'

import { testConfig } from '../test-util/env.js'
import { getBalance } from './get-balance.js'

test('invalid currency symbol', async (t) => {
  const [error] = await getBalance({
    config: testConfig,
    currencySymbol: 'ABC',
  })
  assertError(error)
  t.like(error, {
    message: `Could not get balance from dasset.com.
{"currencySymbol":"ABC"}`,
  })
})
