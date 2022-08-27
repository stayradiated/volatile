import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidTransactionTypesResult = z.infer<typeof responseSchema>

const getValidTransactionTypes = async (): Promise<
  [GetValidTransactionTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidTransactionTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getValidTransactionTypes }
export type { GetValidTransactionTypesResult }
