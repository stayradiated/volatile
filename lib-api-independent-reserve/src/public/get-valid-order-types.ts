import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

const responseSchema = z.array(z.string())

type GetValidOrderTypesResult = z.infer<typeof responseSchema>

const getValidOrderTypes = async (): Promise<
  [GetValidOrderTypesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetValidOrderTypes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getValidOrderTypes }
export type { GetValidOrderTypesResult }
