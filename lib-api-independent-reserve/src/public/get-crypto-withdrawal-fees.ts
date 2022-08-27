import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
const responseSchema = z.record(z.number())

type GetCryptoWithdrawalFeesResult = z.infer<typeof responseSchema>

const getCryptoWithdrawalFees = async (): Promise<
  [GetCryptoWithdrawalFeesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetCryptoWithdrawalFees')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getCryptoWithdrawalFees }
export type { GetCryptoWithdrawalFeesResult }
