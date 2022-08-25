import test from 'ava'
import { throwIfErrorSync } from '@stayradiated/error-boundary'

import { getValidTransactionTypes } from './get-valid-transaction-types.js'

test('should get valid transaction types', async (t) => {
  const [resultOrError] = await getValidTransactionTypes()
  const result = throwIfErrorSync(resultOrError)

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
