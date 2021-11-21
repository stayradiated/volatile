import test from 'ava'
import nock from 'nock'
import { throwIfError } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import { createBuyOrder } from './create-buy-order.js'

nock.disableNetConnect()

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

type RequestBody = {
  price: string
  amount: string
}

test('should return true', async (t) => {
  const price = 9876
  const amount = 0.9876

  nock('https://kiwi-coin.com')
    .post(
      '/api/buy',
      (body: RequestBody) =>
        body.price === String(price) && body.amount === String(amount),
    )
    .reply(
      200,
      JSON.stringify({
        price: '65000.00',
        amount: '0.12345678',
        type: 0,
        id: 123_456,
        datetime: '2021-09-15T07:04:54.280Z',
      }),
    )

  const result = await throwIfError(createBuyOrder({ config, price, amount }))
  t.deepEqual(result, {
    price: 65_000,
    amount: 0.123_456_78,
    type: 'BUY',
    id: 123_456,
    datetime: DateTime.fromISO('2021-09-15T07:04:54.280Z'),
  })
})

test('should return API error', async (t) => {
  const price = 12_345
  const amount = 0.123_45

  nock('https://kiwi-coin.com')
    .post(
      '/api/buy',
      (body: RequestBody) =>
        body.price === String(price) && body.amount === String(amount),
    )
    .reply(400, 'Unauthorized')

  const result = (await createBuyOrder({ config, price, amount })) as Error
  t.is(
    result.message,
    'E_NET: Received error from POST https://kiwi-coin.com/api/buy: E_API: Unauthorized',
  )
})
