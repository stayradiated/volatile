import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidPrimaryCurrencyCodesResult = string[]

const getValidPrimaryCurrencyCodes = async (): Promise<
  GetValidPrimaryCurrencyCodesResult | Error
> =>
  errorBoundary(async () =>
    client.get('Public/GetValidPrimaryCurrencyCodes').json(),
  )

export { getValidPrimaryCurrencyCodes }
export type { GetValidPrimaryCurrencyCodesResult }
