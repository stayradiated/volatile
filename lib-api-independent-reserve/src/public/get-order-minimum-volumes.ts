import { get } from '../util/client.js'

// Returns a list of minimum allowed volumes for orders.
type GetOrderMinimumVolumesResult = Record<string, number>

const getOrderMinimumVolumes = async (): Promise<
  GetOrderMinimumVolumesResult | Error
> => get('Public/GetOrderMinimumVolumes')

export { getOrderMinimumVolumes }
export type { GetOrderMinimumVolumesResult }
