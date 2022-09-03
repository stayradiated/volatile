import test from 'ava'
import { mockGlobalDispatcher } from '@volatile/kanye'

import * as kiwiCoin from './index.js'

const mock = mockGlobalDispatcher('https://kiwi-coin.com')

test('ticker', async (t) => {
  mock.intercept({ path: '/api/ticker' }).reply(200, {
    last: 47_899.05,
    date: 1_625_804_519,
    high: 48_600,
    low: 46_800,
    vwap: 47_973.204_887_54,
    volume: 0.270_251_56,
    bid: 47_454.59,
    ask: 48_454.63,
  })

  const [ticker] = await kiwiCoin.getTicker()
  t.deepEqual(ticker, {
    last: 47_899.05,
    date: 1_625_804_519,
    high: 48_600,
    low: 46_800,
    vwap: 47_973.204_887_54,
    volume: 0.270_251_56,
    bid: 47_454.59,
    ask: 48_454.63,
  })
})
