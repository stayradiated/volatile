import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidMarketOrderTypesResult = z.infer<typeof responseSchema>

const getValidMarketOrderTypes = async (): Promise<
  [GetValidMarketOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidMarketOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getValidMarketOrderTypes }
export type { GetValidMarketOrderTypesResult }
