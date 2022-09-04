import test from 'ava'
import { assertOk, assertError } from '@stayradiated/error-boundary'
import { mockGlobalDispatcher } from '@volatile/kanye'

import { testConfig } from '../test-util/env.js'
import { getBalance } from './get-balance.js'

const mock = mockGlobalDispatcher('https://api.dassetx.com')

test('should get get balance for a single currency', async (t) => {
  mock.intercept({ path: '/api/balances/NZD' }).reply(200, [
    {
      currencySymbol: 'NZD',
      currencyName: 'New Zealand Dollar',
      available: 0.006_063_070_000_209_336,
      inflight: 974.899_331_288_386_4,
      total: 974.905_394_358_386_6,
      nonce: 46_828,
      nzdRate: 1,
      nzdValue: 974.91,
      btcValue: 0.026_685_38,
    },
  ])

  const [result] = await getBalance({
    config: testConfig,
    currencySymbol: 'NZD',
  })

  assertOk(result)

  t.deepEqual(result, {
    currencySymbol: 'NZD',
    currencyName: 'New Zealand Dollar',
    available: 0.006_063_070_000_209_336,
    inflight: 974.899_331_288_386_4,
    total: 974.905_394_358_386_6,
    nonce: 46_828,
    nzdRate: 1,
    nzdValue: 974.91,
    btcValue: 0.026_685_38,
  })
})

test('should throw error if currency does not exist', async (t) => {
  mock.intercept({ path: '/api/balances/BLAH' }).reply(404, {
    code: 4042,
    message: 'Resource not found',
    status: 404,
    type: 'ResourceNotFound',
  })

  const [result] = await getBalance({
    config: testConfig,
    currencySymbol: 'BLAH',
  })

  assertError(result)
  t.is(
    result.message,
    `Could not get balance for currency "BLAH" from dasset.com.
{"currencySymbol":"BLAH"}`,
  )

  assertError(result.cause)
  t.is(result.cause.message, `404 Resource not found [4042:ResourceNotFound]`)
})
