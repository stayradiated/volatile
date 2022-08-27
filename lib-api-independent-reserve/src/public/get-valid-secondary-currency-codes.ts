import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidSecondaryCurrencyCodesResult = z.infer<typeof responseSchema>

const getValidSecondaryCurrencyCodes = async (): Promise<
  [GetValidSecondaryCurrencyCodesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidSecondaryCurrencyCodes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getValidSecondaryCurrencyCodes }
export type { GetValidSecondaryCurrencyCodesResult }
