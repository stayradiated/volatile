import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getDepositFees, GetDepositFeesResult } from './get-deposit-fees.js'

test('should get deposit fees', async (t) => {
  const result = await throwIfError<GetDepositFeesResult>(getDepositFees())
  t.true(Array.isArray(result))
  const item = result[0]!
  t.is(typeof item.DepositType, 'string')
  t.is(typeof item.FreeThreshold, 'number')
  t.is(typeof item.Fee.Fixed, 'number')
  t.is(item.Fee.Percentage, null)
})
