import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

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
  [GetFiatWithdrawalFeesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetFiatWithdrawalFees')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetFiatWithdrawalFeesResult>(raw)
  return [result, raw]
}

export { getFiatWithdrawalFees }
export type { GetFiatWithdrawalFeesResult }
