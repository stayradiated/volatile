import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidSecondaryCurrencyCodes } from './get-valid-secondary-currency-codes.js'

test('should get valid secondary currency codes', async (t) => {
  const [resultOrError] = await getValidSecondaryCurrencyCodes()
  const result = throwIfError(resultOrError)

  t.deepEqual(result, ['Aud', 'Usd', 'Nzd', 'Sgd'])
})
