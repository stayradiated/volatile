import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidPrimaryCurrencyCodes } from './get-valid-primary-currency-codes.js'

test('should get valid primary currency codes', async (t) => {
  const result = await throwIfError<string[]>(getValidPrimaryCurrencyCodes())
  t.deepEqual(result.sort(), [
    'Aave',
    'Ada',
    'Bat',
    'Bch',
    'Comp',
    'Dai',
    'Doge',
    'Dot',
    'Eos',
    'Etc',
    'Eth',
    'Grt',
    'Link',
    'Ltc',
    'Matic',
    'Mkr',
    'Omg',
    'Pmgt',
    'Snx',
    'Uni',
    'Usdc',
    'Usdt',
    'Xbt',
    'Xlm',
    'Xrp',
    'Yfi',
    'Zrx',
  ])
})
