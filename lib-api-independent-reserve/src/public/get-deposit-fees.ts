import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const nullToUndefined = (arg: unknown) => {
  if (arg === null) {
    return undefined
  }

  return arg
}

// Deposit fee for the currency. Denominated in the deposit currency.
/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    // The method of deposit
    DepositType: z.string(),
    // An amount below this threshold will incur a deposit fee. When null, the fee is always applied.
    FreeThreshold: z.preprocess(nullToUndefined, z.optional(z.number())),
    // Deposit fee which will be deducted from deposit amount when under threshold. Denominated in the deposit currency.
    Fee: z.object({
      // Fixed fee amount
      Fixed: z.preprocess(nullToUndefined, z.optional(z.number())),
      // Percentage fee
      Percentage: z.preprocess(nullToUndefined, z.optional(z.number())),
    }),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetDepositFeesResult = z.infer<typeof responseSchema>

const getDepositFees = async (): Promise<
  [GetDepositFeesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetDepositFees')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getDepositFees }
export type { GetDepositFeesResult }
