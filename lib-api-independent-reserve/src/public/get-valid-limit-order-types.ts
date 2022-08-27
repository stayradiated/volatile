import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidLimitOrderTypesResult = z.infer<typeof responseSchema>

const getValidLimitOrderTypes = async (): Promise<
  [GetValidLimitOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidLimitOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getValidLimitOrderTypes }
export type { GetValidLimitOrderTypesResult }
