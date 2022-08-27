import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidPrimaryCurrencyCodesResult = z.infer<typeof responseSchema>

const getValidPrimaryCurrencyCodes = async (): Promise<
  [GetValidPrimaryCurrencyCodesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidPrimaryCurrencyCodes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)

  return [result, raw]
}

export { getValidPrimaryCurrencyCodes }
export type { GetValidPrimaryCurrencyCodesResult }
