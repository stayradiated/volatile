import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidTransactionTypes } from './get-valid-transaction-types.js'

test('should get valid transaction types', async (t) => {
  const result = await throwIfError(getValidTransactionTypes())
  t.deepEqual(result, [
    'AccountFee',
    'Brokerage',
    'Deposit',
    'DepositFee',
    'GST',
    'ReferralCommission',
    'StatementFee',
    'Trade',
    'Withdrawal',
    'WithdrawalFee',
  ])
})
