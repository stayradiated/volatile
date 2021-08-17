import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidOrderTypes } from './get-valid-order-types.js'

test('should get valid order types', async (t) => {
  const result = await throwIfError(getValidOrderTypes())
  t.deepEqual(result, ['LimitBid', 'LimitOffer', 'MarketBid', 'MarketOffer'])
})
