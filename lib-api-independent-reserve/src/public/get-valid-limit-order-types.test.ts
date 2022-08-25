import test from 'ava'
import { throwIfErrorSync } from '@stayradiated/error-boundary'

import { getValidLimitOrderTypes } from './get-valid-limit-order-types.js'

test('should get valid limit order types', async (t) => {
  const [resultOrError] = await getValidLimitOrderTypes()
  const result = throwIfErrorSync(resultOrError)

  t.deepEqual(result, ['LimitBid', 'LimitOffer'])
})
