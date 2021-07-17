import test from 'ava'
import nock from 'nock'

import * as kiwiCoin from './index.js'

test.before(() => {
  nock.disableNetConnect()
})

test.serial('ticker', async (t) => {
  nock('https://kiwi-coin.com').get('/api/ticker').reply(200, {
    last: 47_899.05,
    date: 1_625_804_519,
    high: 48_600,
    low: 46_800,
    vwap: 47_973.204_887_54,
    volume: 0.270_251_56,
    bid: 47_454.59,
    ask: 48_454.63,
  })

  const ticker = await kiwiCoin.ticker()
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
