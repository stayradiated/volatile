import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidPrimaryCurrencyCodesResult = string[]

const getValidPrimaryCurrencyCodes = async (): Promise<
  [GetValidPrimaryCurrencyCodesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidPrimaryCurrencyCodes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidPrimaryCurrencyCodesResult>(raw)
  return [result, raw]
}

export { getValidPrimaryCurrencyCodes }
export type { GetValidPrimaryCurrencyCodesResult }
