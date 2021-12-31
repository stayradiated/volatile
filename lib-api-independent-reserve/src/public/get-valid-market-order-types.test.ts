import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidMarketOrderTypes } from './get-valid-market-order-types.js'

test('should get valid market order types', async (t) => {
  const [resultOrError] = await getValidMarketOrderTypes()
  const result = throwIfError(resultOrError)

  t.deepEqual(result, ['MarketBid', 'MarketOffer'])
})
