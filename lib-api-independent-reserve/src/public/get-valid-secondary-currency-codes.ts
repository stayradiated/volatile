import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidSecondaryCurrencyCodesResult = string[]

const getValidSecondaryCurrencyCodes = async (): Promise<
  [GetValidSecondaryCurrencyCodesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidSecondaryCurrencyCodes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidSecondaryCurrencyCodesResult>(raw)
  return [result, raw]
}

export { getValidSecondaryCurrencyCodes }
export type { GetValidSecondaryCurrencyCodesResult }
