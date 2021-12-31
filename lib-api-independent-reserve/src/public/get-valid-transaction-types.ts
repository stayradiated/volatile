import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetValidTransactionTypesResult = string[]

const getValidTransactionTypes = async (): Promise<
  [GetValidTransactionTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidTransactionTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetValidTransactionTypesResult>(raw)
  return [result, raw]
}

export { getValidTransactionTypes }
export type { GetValidTransactionTypesResult }
