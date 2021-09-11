import { get } from '../util/client.js'

type GetValidLimitOrderTypesResult = string[]

const getValidLimitOrderTypes = async (): Promise<
  GetValidLimitOrderTypesResult | Error
> => get('Public/GetValidLimitOrderTypes')

export { getValidLimitOrderTypes }
export type { GetValidLimitOrderTypesResult }
