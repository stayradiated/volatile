import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const nullToUndefined = (arg: unknown) => {
  if (arg === null) {
    return undefined
  }

  return arg
}

// Withdrawal fee for the currency. Denominated in the withdrawal currency.
/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    // The withdrawal method
    WithdrawalType: z.string(),
    // The minimum withdrawal amount
    MinimumAmount: z.number(),
    // The withdrawal currency
    CurrencyCode: z.string(),
    // Withdrawal fee which will be charged from your account.
    Fee: z.object({
      // Fixed fee amount
      Fixed: z.number(),
      // Percentage fee
      Percentage: z.preprocess(nullToUndefined, z.optional(z.number())),
    }),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetFiatWithdrawalFeesResult = z.infer<typeof responseSchema>

const getFiatWithdrawalFees = async (): Promise<
  [GetFiatWithdrawalFeesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetFiatWithdrawalFees')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getFiatWithdrawalFees }
export type { GetFiatWithdrawalFeesResult }
