import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidMarketOrderTypesResult = string[]

const getValidMarketOrderTypes = async (): Promise<
  [GetValidMarketOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidMarketOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidMarketOrderTypesResult>(raw)
  return [result, raw]
}

export { getValidMarketOrderTypes }
export type { GetValidMarketOrderTypesResult }
