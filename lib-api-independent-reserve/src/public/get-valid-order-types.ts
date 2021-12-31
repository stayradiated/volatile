import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidOrderTypesResult = string[]

const getValidOrderTypes = async (): Promise<
  [GetValidOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidOrderTypesResult>(raw)
  return [result, raw]
}

export { getValidOrderTypes }
export type { GetValidOrderTypesResult }
