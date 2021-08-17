import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

// Returns a list of minimum allowed volumes for orders.
type GetOrderMinimumVolumesResult = Record<string, number>

const getOrderMinimumVolumes = async (): Promise<
  GetOrderMinimumVolumesResult | Error
> =>
  errorBoundary(async () => client.get('Public/GetOrderMinimumVolumes').json())

export { getOrderMinimumVolumes }
export type { GetOrderMinimumVolumesResult }
