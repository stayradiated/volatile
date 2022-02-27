import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import {
  getFiatWithdrawalFees,
  GetFiatWithdrawalFeesResult,
} from './get-fiat-withdrawal-fees.js'

test('should get fiat withdrawal fees', async (t) => {
  const [resultOrError] = await getFiatWithdrawalFees()
  const result = throwIfError<GetFiatWithdrawalFeesResult>(resultOrError)

  t.true(Array.isArray(result))
  const item = result[0]!
  t.is(typeof item.CurrencyCode, 'string')
  t.is(typeof item.Fee.Fixed, 'number')
  t.is(item.Fee.Percentage, undefined)
  t.is(typeof item.MinimumAmount, 'number')
  t.is(typeof item.WithdrawalType, 'string')
})
