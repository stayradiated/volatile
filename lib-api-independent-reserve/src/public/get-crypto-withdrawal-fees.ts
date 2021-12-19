import { get } from '../util/client.js'

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
//
type GetCryptoWithdrawalFeesResult = Record<string, number>

const getCryptoWithdrawalFees = async (): Promise<
  GetCryptoWithdrawalFeesResult | Error
> => get('Public/GetCryptoWithdrawalFees')

export { getCryptoWithdrawalFees }
export type { GetCryptoWithdrawalFeesResult }
