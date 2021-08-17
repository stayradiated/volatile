import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidOrderTypesResult = string[]

const getValidOrderTypes = async (): Promise<
  GetValidOrderTypesResult | Error
> => errorBoundary(async () => client.get('Public/GetValidOrderTypes').json())

export { getValidOrderTypes }
export type { GetValidOrderTypesResult }
