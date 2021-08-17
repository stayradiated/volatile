import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
type GetFiatWithdrawalFeesResult = Array<{
  // The withdrawal method
  WithdrawalType: string
  // The minimum withdrawal amount
  MinimumAmount: number
  // The withdrawal currency
  CurrencyCode: string
  // Withdrawal fee which will be charged from your account.
  Fee: {
    // Fixed fee amount
    Fixed: number
    // Percentage fee
    Percentage: number | null
  }
}>

const getFiatWithdrawalFees = async (): Promise<
  GetFiatWithdrawalFeesResult | Error
> =>
  errorBoundary(async () => client.get('Public/GetFiatWithdrawalFees').json())

export { getFiatWithdrawalFees }
export type { GetFiatWithdrawalFeesResult }
