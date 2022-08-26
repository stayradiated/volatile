import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidPrimaryCurrencyCodes } from './get-valid-primary-currency-codes.js'

test('should get valid primary currency codes', async (t) => {
  const [result] = await getValidPrimaryCurrencyCodes()
  assertOk(result)

  const sortedResults = [...result].sort((a, b) => a.localeCompare(b))
  t.deepEqual(
    [
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
      'Mana',
      'Matic',
      'Mkr',
      'Omg',
      'Pmgt',
      'Sand',
      'Snx',
      'Sol',
      'Uni',
      'Usdc',
      'Usdt',
      'Xbt',
      'Xlm',
      'Xrp',
      'Yfi',
      'Zrx',
    ].join('\n'),
    sortedResults.join('\n'),
  )
})
