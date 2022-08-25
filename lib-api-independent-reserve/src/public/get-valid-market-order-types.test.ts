import test from 'ava'
import { throwIfErrorSync } from '@stayradiated/error-boundary'

import { getValidMarketOrderTypes } from './get-valid-market-order-types.js'

test('should get valid market order types', async (t) => {
  const [resultOrError] = await getValidMarketOrderTypes()
  const result = throwIfErrorSync(resultOrError)

  t.deepEqual(result, ['MarketBid', 'MarketOffer'])
})
