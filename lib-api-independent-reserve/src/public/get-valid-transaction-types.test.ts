import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getValidTransactionTypes } from './get-valid-transaction-types.js'

test('should get valid transaction types', async (t) => {
  const [result] = await getValidTransactionTypes()
  assertOk(result)

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
