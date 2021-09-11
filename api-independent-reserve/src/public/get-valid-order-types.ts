import { get } from '../util/client.js'

type GetValidOrderTypesResult = string[]

const getValidOrderTypes = async (): Promise<
  GetValidOrderTypesResult | Error
> => get('Public/GetValidOrderTypes')

export { getValidOrderTypes }
export type { GetValidOrderTypesResult }
