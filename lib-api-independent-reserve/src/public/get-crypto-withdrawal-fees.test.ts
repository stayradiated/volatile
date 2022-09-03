import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getCryptoWithdrawalFees } from './get-crypto-withdrawal-fees.js'

test('should get crypto withdrawal fees', async (t) => {
  const [result] = await getCryptoWithdrawalFees()
  console.log({ result })
  assertOk(result)

  const values = Object.values(result)
  t.true(values.every((value) => typeof value === 'number'))
})
