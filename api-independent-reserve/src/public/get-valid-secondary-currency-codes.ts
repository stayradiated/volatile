import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetValidSecondaryCurrencyCodesResult = string[]

const getValidSecondaryCurrencyCodes = async (): Promise<
  GetValidSecondaryCurrencyCodesResult | Error
> =>
  errorBoundary(async () =>
    client.get('Public/GetValidSecondaryCurrencyCodes').json(),
  )

export { getValidSecondaryCurrencyCodes }
export type { GetValidSecondaryCurrencyCodesResult }
