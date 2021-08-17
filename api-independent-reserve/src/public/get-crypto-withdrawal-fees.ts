import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
//
type GetCryptoWithdrawalFeesResult = Record<string, number>

const getCryptoWithdrawalFees = async (): Promise<
  GetCryptoWithdrawalFeesResult | Error
> =>
  errorBoundary(async () => client.get('Public/GetCryptoWithdrawalFees').json())

export { getCryptoWithdrawalFees }
export type { GetCryptoWithdrawalFeesResult }
