import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidLimitOrderTypes } from './get-valid-limit-order-types.js'

test('should get valid limit order types', async (t) => {
  const [result] = await getValidLimitOrderTypes()
  assertOk(result)

  t.deepEqual(result, ['LimitBid', 'LimitOffer'])
})
