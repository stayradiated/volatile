import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidMarketOrderTypes } from './get-valid-market-order-types.js'

test('should get valid market order types', async (t) => {
  const [result] = await getValidMarketOrderTypes()
  assertOk(result)

  t.deepEqual(result, ['MarketBid', 'MarketOffer'])
})
