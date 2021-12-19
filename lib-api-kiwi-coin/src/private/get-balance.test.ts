import test from 'ava'
import nock from 'nock'
import { throwIfError } from '@stayradiated/error-boundary'

import { getBalance } from './get-balance.js'

nock.disableNetConnect()

const config = {
  userId: 'user-id',
  apiKey: 'api-key',
  apiSecret: 'api-secret',
}

const stripPath = (input: string): string =>
  input.replace(/file:\/{3}[a-z\d/.:-]+/gi, 'PATH')

test('should return true', async (t) => {
  nock('https://kiwi-coin.com')
    .post('/api/balance', () => true)
    .reply(
      200,
      JSON.stringify({
        nzd_available: '10.10',
        nzd_reserved: '20.20',
        nzd_balance: '30.30',
        btc_available: '0.002',
        btc_reserved: '0.003',
        btc_balance: '0.005',
        fee: '0.8',
        mmfee: '0.4',
      }),
    )

  const result = await throwIfError(getBalance({ config }))
  t.deepEqual(result, {
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
  nock('https://kiwi-coin.com')
    .post('/api/balance', () => true)
    .reply(200, JSON.stringify({}))

  const result = (await getBalance({ config })) as Error
  t.is(
    stripPath(result.message),
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
