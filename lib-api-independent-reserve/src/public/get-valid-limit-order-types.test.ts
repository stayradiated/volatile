import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidLimitOrderTypes } from './get-valid-limit-order-types.js'

test('should get valid limit order types', async (t) => {
  const [resultOrError] = await getValidLimitOrderTypes()
  const result = throwIfError(resultOrError)

  t.deepEqual(result, ['LimitBid', 'LimitOffer'])
})
