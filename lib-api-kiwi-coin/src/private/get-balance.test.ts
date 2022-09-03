import test from 'ava'
import { assertOk, assertError } from '@stayradiated/error-boundary'
import { mockGlobalDispatcher } from '@volatile/kanye'

import { getBalance } from './get-balance.js'

const mock = mockGlobalDispatcher('https://kiwi-coin.com')

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

const stripPath = (input: string): string =>
  input.replace(/file:\/{3}[a-z\d/.:-]+/gi, 'PATH')

test('should return true', async (t) => {
  mock.intercept({ method: 'POST', path: '/api/balance' }).reply(
    200,
    JSON.stringify({
      /* eslint-disable @typescript-eslint/naming-convention */
      nzd_available: '10.10',
      nzd_reserved: '20.20',
      nzd_balance: '30.30',
      btc_available: '0.002',
      btc_reserved: '0.003',
      btc_balance: '0.005',
      fee: '0.8',
      mmfee: '0.4',
      /* eslint-enable @typescript-eslint/naming-convention */
    }),
  )

  const [balance] = await getBalance({ config })
  assertOk(balance)

  t.deepEqual(balance, {
    nzd: {
      available: 10.1,
      reserved: 20.2,
      balance: 30.3,
    },
    btc: {
      available: 0.002,
      reserved: 0.003,
      balance: 0.005,
    },
    fee: {
      marketMaker: 0.4,
      marketTaker: 0.8,
    },
  })
})

test('should detect invalid response', async (t) => {
  mock
    .intercept({ method: 'POST', path: '/api/balance' })
    .reply(200, JSON.stringify({}))

  const [balance] = await getBalance({ config })
  assertError(balance)

  t.is(
    stripPath(balance.message),
    `Warning: root.nzd_available value is undefined. at PATH
Warning: root.nzd_available Could not convert undefined to float. at PATH
Warning: root.nzd_reserved value is undefined. at PATH
Warning: root.nzd_reserved Could not convert undefined to float. at PATH
Warning: root.nzd_balance value is undefined. at PATH
Warning: root.nzd_balance Could not convert undefined to float. at PATH
Warning: root.btc_available value is undefined. at PATH
Warning: root.btc_available Could not convert undefined to float. at PATH
Warning: root.btc_reserved value is undefined. at PATH
Warning: root.btc_reserved Could not convert undefined to float. at PATH
Warning: root.btc_balance value is undefined. at PATH
Warning: root.btc_balance Could not convert undefined to float. at PATH
Warning: root.fee value is undefined. at PATH
Warning: root.fee Could not convert undefined to float. at PATH
Warning: root.mmfee value is undefined. at PATH
Warning: root.mmfee Could not convert undefined to float. at PATH`,
  )
})
