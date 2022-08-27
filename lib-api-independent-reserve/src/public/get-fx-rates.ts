import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

// Returns a list of exchange rates used by Independing Reserve when depositing
// funds or withdrawing funds from accounts.
/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    CurrencyCodeA: z.string(),
    CurrencyCodeB: z.string(),
    Rate: z.number(),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetFxRatesResult = z.infer<typeof responseSchema>

const getFxRates = async (): Promise<[GetFxRatesResult | Error, Kanye?]> => {
  const raw = await get('Public/GetFxRates')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getFxRates }
export type { GetFxRatesResult }
