import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidMarketOrderTypes } from './get-valid-market-order-types.js'

test('should get valid market order types', async (t) => {
  const result = await throwIfError(getValidMarketOrderTypes())
  t.deepEqual(result, ['MarketBid', 'MarketOffer'])
})
