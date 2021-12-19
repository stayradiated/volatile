import test from 'ava'
import nock from 'nock'
import { throwIfError } from '@stayradiated/error-boundary'

import { cancelOrder } from './cancel-order.js'

nock.disableNetConnect()

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

type RequestBody = {
  id: string
}

test('should return true', async (t) => {
  const orderID = 12_345

  nock('https://kiwi-coin.com')
    .post(
      '/api/cancel_order',
      (body: RequestBody) => body.id === String(orderID),
    )
    .reply(200, JSON.stringify(true))

  const result = await throwIfError(cancelOrder({ config, orderID }))
  t.is(result, true)
})

test('should return API error', async (t) => {
  const orderID = 98_765

  nock('https://kiwi-coin.com')
    .post(
      '/api/cancel_order',
      (body: RequestBody) => body.id === String(orderID),
    )
    .reply(400, 'Unauthorized')

  const result = (await cancelOrder({ config, orderID })) as Error
  t.is(
    result.message,
    'E_NET: Received error from POST https://kiwi-coin.com/api/cancel_order: E_API: Unauthorized',
  )
})
