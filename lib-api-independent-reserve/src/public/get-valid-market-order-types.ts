import { get } from '../util/client.js'

type GetValidMarketOrderTypesResult = string[]

const getValidMarketOrderTypes = async (): Promise<
  GetValidMarketOrderTypesResult | Error
> => get('Public/GetValidMarketOrderTypes')

export { getValidMarketOrderTypes }
export type { GetValidMarketOrderTypesResult }
