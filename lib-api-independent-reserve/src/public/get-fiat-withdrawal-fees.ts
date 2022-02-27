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
    Percentage: number | undefined
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

  if (!(result instanceof Error)) {
    for (const item of result) {
      item.Fee.Fixed = item.Fee.Fixed ?? undefined
      item.Fee.Percentage = item.Fee.Percentage ?? undefined
    }
  }

  return [result, raw]
}

export { getFiatWithdrawalFees }
export type { GetFiatWithdrawalFeesResult }
