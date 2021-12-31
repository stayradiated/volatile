import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
//
type GetCryptoWithdrawalFeesResult = Record<string, number>

const getCryptoWithdrawalFees = async (): Promise<
  [GetCryptoWithdrawalFeesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetCryptoWithdrawalFees')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetCryptoWithdrawalFeesResult>(raw)
  return [result, raw]
}

export { getCryptoWithdrawalFees }
export type { GetCryptoWithdrawalFeesResult }
