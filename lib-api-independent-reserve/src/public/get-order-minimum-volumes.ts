import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

// Returns a list of minimum allowed volumes for orders.
type GetOrderMinimumVolumesResult = Record<string, number>

const getOrderMinimumVolumes = async (): Promise<
  [GetOrderMinimumVolumesResult | Error, Kanye?]
> => {
  const raw = await get('Public/GetOrderMinimumVolumes')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetOrderMinimumVolumesResult>(raw)
  return [result, raw]
}

export { getOrderMinimumVolumes }
export type { GetOrderMinimumVolumesResult }
