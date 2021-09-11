import { get } from '../util/client.js'

type GetValidTransactionTypesResult = string[]

const getValidTransactionTypes = async (): Promise<
  GetValidTransactionTypesResult | Error
> => get('Public/GetValidTransactionTypes')

export { getValidTransactionTypes }
export type { GetValidTransactionTypesResult }
