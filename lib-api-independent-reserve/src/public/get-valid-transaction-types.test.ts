import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getValidTransactionTypes } from './get-valid-transaction-types.js'

test('should get valid transaction types', async (t) => {
  const [resultOrError] = await getValidTransactionTypes()
  const result = throwIfError(resultOrError)

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
