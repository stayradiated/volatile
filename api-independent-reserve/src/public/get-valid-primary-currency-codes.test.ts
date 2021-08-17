import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidPrimaryCurrencyCodes } from './get-valid-primary-currency-codes.js'

test('should get valid primary currency codes', async (t) => {
  const result = await throwIfError(getValidPrimaryCurrencyCodes())
  t.deepEqual(result, [
    'Xbt',
    'Eth',
    'Xrp',
    'Ada',
    'Doge',
    'Dot',
    'Uni',
    'Link',
    'Usdt',
    'Usdc',
    'Bch',
    'Ltc',
    'Mkr',
    'Dai',
    'Comp',
    'Snx',
    'Grt',
    'Eos',
    'Xlm',
    'Etc',
    'Matic',
    'Bat',
    'Pmgt',
    'Yfi',
    'Aave',
    'Zrx',
    'Omg',
  ])
})
