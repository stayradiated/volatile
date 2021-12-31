import test from 'ava'

import { TEST_CONFIG } from '../test-util/env.js'
import { getBalance } from './get-balance.js'

test('invalid currency symbol', async (t) => {
  const [error] = await getBalance({
    config: TEST_CONFIG,
    currencySymbol: 'ABC',
  })
  t.like(error, {
    message:
      'E_API: Could not get balance from dasset.com: E_API: Received 404 error from POST https://api.dassetx.com/api/balances/ABC: {"status":404,"type":"ResourceNotFound","code":4042,"message":"Resource not found"}',
  })
})
