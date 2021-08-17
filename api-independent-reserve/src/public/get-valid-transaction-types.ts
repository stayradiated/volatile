import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidTransactionTypesResult = string[]

const getValidTransactionTypes = async (): Promise<
  GetValidTransactionTypesResult | Error
> =>
  errorBoundary(async () =>
    client.get('Public/GetValidTransactionTypes').json(),
  )

export { getValidTransactionTypes }
export type { GetValidTransactionTypesResult }
