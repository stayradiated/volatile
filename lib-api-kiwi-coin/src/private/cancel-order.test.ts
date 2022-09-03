import test from 'ava'
import { mockGlobalDispatcher } from '@volatile/kanye'
import { assertOk, assertError } from '@stayradiated/error-boundary'

import { cancelOrder } from './cancel-order.js'

const mock = mockGlobalDispatcher('https://kiwi-coin.com')

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

test('should return true', async (t) => {
  const orderId = 12_345

  mock
    .intercept({
      method: 'POST',
      path: '/api/cancel_order',
      body(body) {
        const parameters = new URLSearchParams(body)
        return parameters.get('id') === String(orderId)
      },
    })
    .reply(200, JSON.stringify(true))

  const [result] = await cancelOrder({ config, orderId })
  assertOk(result)

  t.is(result, true)
})

test('should return API error', async (t) => {
  const orderId = 98_765

  mock
    .intercept({
      method: 'POST',
      path: '/api/cancel_order',
      body(body) {
        const parameters = new URLSearchParams(body)
        return parameters.get('id') === String(orderId)
      },
    })
    .reply(200, JSON.stringify({ error: 'Unauthorized' }))

  const [result] = await cancelOrder({ config, orderId })

  assertError(result)

  t.is(
    result.message,
    'Received error from POST https://kiwi-coin.com/api/cancel_order',
  )
})
