import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidSecondaryCurrencyCodes } from './get-valid-secondary-currency-codes.js'

test('should get valid secondary currency codes', async (t) => {
  const [result] = await getValidSecondaryCurrencyCodes()
  assertOk(result)

  t.deepEqual(result, ['Aud', 'Usd', 'Nzd', 'Sgd'])
})
