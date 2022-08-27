import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

// Returns a list of minimum allowed volumes for orders.
const responseSchema = z.record(z.number())

type GetOrderMinimumVolumesResult = z.infer<typeof responseSchema>

const getOrderMinimumVolumes = async (): Promise<
  [GetOrderMinimumVolumesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetOrderMinimumVolumes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getOrderMinimumVolumes }
export type { GetOrderMinimumVolumesResult }
