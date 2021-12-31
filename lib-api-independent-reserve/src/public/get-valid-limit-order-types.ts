import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidLimitOrderTypesResult = string[]

const getValidLimitOrderTypes = async (): Promise<
  [GetValidLimitOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidLimitOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidLimitOrderTypesResult>(raw)
  return [result, raw]
}

export { getValidLimitOrderTypes }
export type { GetValidLimitOrderTypesResult }
