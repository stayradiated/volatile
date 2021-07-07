import test from 'ava'

import { parseConfig, Config } from './index.js'

test('parseConfig: should return validation error', (t) => {
  const config = {}
  const output = parseConfig(JSON.stringify(config)) as Error
  t.true(output instanceof Error)
  t.is(
    output.message,
    `Config file is missing fields:
- "kiwi-coin.com".userId
- "kiwi-coin.com".apiKey
- "kiwi-coin.com"."apiSecret"
- "openexchangerates.org".appId
- "coinmarketcap.com".apiKey
- "dassetx.com".apiKey
- "dassetx.com".accountId`,
  )
})

test('parseConfig: should return config', (t) => {
  const config = {
    'kiwi-coin.com': {
      userId: 'x',
      apiKey: 'x',
      apiSecret: 'x',
    },
    'openexchangerates.org': {
      appId: 'x',
    },
    'coinmarketcap.com': {
      apiKey: 'x',
    },
    'dassetx.com': {
      apiKey: 'x',
      accountId: 'x',
    },
  }

  const output = parseConfig(JSON.stringify(config)) as Config
  t.deepEqual(output, {
    kiwiCoin: {
      userId: 'x',
      apiKey: 'x',
      apiSecret: 'x',
    },
    openExchangeRates: {
      appId: 'x',
    },
    coinMarketCap: {
      apiKey: 'x',
    },
    dasset: {
      apiKey: 'x',
      accountId: 'x',
    },
  })
})
