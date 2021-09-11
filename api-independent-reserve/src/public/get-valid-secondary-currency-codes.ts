import { get } from '../util/client.js'

type GetValidSecondaryCurrencyCodesResult = string[]

const getValidSecondaryCurrencyCodes = async (): Promise<
  GetValidSecondaryCurrencyCodesResult | Error
> => get('Public/GetValidSecondaryCurrencyCodes')

export { getValidSecondaryCurrencyCodes }
export type { GetValidSecondaryCurrencyCodesResult }
