import { get } from '../util/client.js'

type GetValidPrimaryCurrencyCodesResult = string[]

const getValidPrimaryCurrencyCodes = async (): Promise<
  GetValidPrimaryCurrencyCodesResult | Error
> => get('Public/GetValidPrimaryCurrencyCodes')

export { getValidPrimaryCurrencyCodes }
export type { GetValidPrimaryCurrencyCodesResult }
