import test from 'ava'
import { mockGlobalDispatcher } from '@volatile/kanye'
import { assertOk, assertError } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'

import { getTradeList } from './get-trade-list.js'

const mock = mockGlobalDispatcher('https://kiwi-coin.com')

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

const stripPath = (input: string): string =>
  input.replace(/file:\/{3}[a-z\d/.:-]+/gi, 'PATH')

test('should parse response', async (t) => {
  mock.intercept({ method: 'POST', path: '/api/trades' }).reply(
    200,
    JSON.stringify([
      {
        /* eslint-disable @typescript-eslint/naming-convention */
        transaction_id: 12_345,
        order_id: 98_765,
        datetime: 1_631_710_068,
        trade_type: 0,
        trade_size: 0.5,
        price: 30_000,
        income: 0.5,
        fee: 0.4,
        /* eslint-enable @typescript-eslint/naming-convention */
      },
    ]),
  )

  const [tradeList] = await getTradeList({ config, timeframe: 'all' })
  assertOk(tradeList)

  t.deepEqual(tradeList, [
    {
      transactionId: 12_345,
      orderId: 98_765,
      datetime: fromUnixTime(1_631_710_068),
      tradeType: 'BUY',
      tradeSize: 0.5,
      price: 30_000,
      income: 0.5,
      fee: 0.4,
    },
  ])
})

test('should detect invalid response', async (t) => {
  mock
    .intercept({ method: 'POST', path: '/api/trades' })
    .reply(200, JSON.stringify([{}]))

  const [tradeList] = await getTradeList({ config, timeframe: 'all' })
  assertError(tradeList)

  t.is(
    stripPath(tradeList.message),
    `Warning: root[0].transaction_id value is undefined. at PATH
Warning: root[0].order_id value is undefined. at PATH
Warning: root[0].datetime value is undefined. at PATH
Warning: root[0].datetime Could not convert undefined to Date. at PATH
Warning: root[0].trade_type value is undefined. at PATH
Warning: root[0].trade_type Unsupported value "undefined" at PATH
Warning: root[0].trade_size value is undefined. at PATH
Warning: root[0].price value is undefined. at PATH
Warning: root[0].income value is undefined. at PATH
Warning: root[0].fee value is undefined. at PATH`,
  )
})
