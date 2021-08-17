import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidLimitOrderTypes } from './get-valid-limit-order-types.js'

test('should get valid limit order types', async (t) => {
  const result = await throwIfError(getValidLimitOrderTypes())
  t.deepEqual(result, ['LimitBid', 'LimitOffer'])
})
