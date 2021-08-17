import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidLimitOrderTypesResult = string[]

const getValidLimitOrderTypes = async (): Promise<
  GetValidLimitOrderTypesResult | Error
> =>
  errorBoundary(async () => client.get('Public/GetValidLimitOrderTypes').json())

export { getValidLimitOrderTypes }
export type { GetValidLimitOrderTypesResult }
