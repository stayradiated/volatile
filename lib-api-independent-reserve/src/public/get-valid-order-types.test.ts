import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidOrderTypes } from './get-valid-order-types.js'

test('should get valid order types', async (t) => {
  const [result] = await getValidOrderTypes()
  assertOk(result)

  t.deepEqual(result, ['LimitBid', 'LimitOffer', 'MarketBid', 'MarketOffer'])
})
