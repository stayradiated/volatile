import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidMarketOrderTypesResult = string[]

const getValidMarketOrderTypes = async (): Promise<
  GetValidMarketOrderTypesResult | Error
> =>
  errorBoundary(async () =>
    client.get('Public/GetValidMarketOrderTypes').json(),
  )

export { getValidMarketOrderTypes }
export type { GetValidMarketOrderTypesResult }
