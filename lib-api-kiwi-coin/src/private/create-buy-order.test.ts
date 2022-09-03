import test from 'ava'
import { assertOk, assertError } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'
import { mockGlobalDispatcher } from '@volatile/kanye'

import { createBuyOrder } from './create-buy-order.js'

const mock = mockGlobalDispatcher('https://kiwi-coin.com')

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

test('should create buy order and return info', async (t) => {
  const price = 9876
  const amount = 0.9876

  mock
    .intercept({
      method: 'POST',
      path: '/api/buy',
      body(body) {
        const parameters = new URLSearchParams(body)
        return (
          parameters.get('price') === String(price) &&
          parameters.get('amount') === String(amount)
        )
      },
    })
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

  const [order] = await createBuyOrder({ config, price, amount })
  assertOk(order)

  t.deepEqual(order, {
    price: 65_000,
    amount: 0.123_456_78,
    type: 'BUY',
    id: 123_456,
    datetime: parseISO('2021-09-15T07:04:54.280Z'),
  })
})

test('should return API error', async (t) => {
  const price = 12_345
  const amount = 0.123_45

  mock
    .intercept({
      method: 'POST',
      path: '/api/buy',
      body(body) {
        const parameters = new URLSearchParams(body)
        return (
          parameters.get('price') === String(price) &&
          parameters.get('amount') === String(amount)
        )
      },
    })
    .reply(401, 'Unauthorized')

  const [order] = await createBuyOrder({ config, price, amount })
  assertError(order)

  t.is(
    order.message,
    'Received 401 error from POST https://kiwi-coin.com/api/buy: Unauthorized',
  )
})
