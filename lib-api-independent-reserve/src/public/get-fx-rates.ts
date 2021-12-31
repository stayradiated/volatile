import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

// Returns a list of exchange rates used by Independing Reserve when depositing
// funds or withdrawing funds from accounts.
type GetFxRatesResult = Array<{
  CurrencyCodeA: string
  CurrencyCodeB: string
  Rate: number
}>

const getFxRates = async (): Promise<[GetFxRatesResult | Error, Kanye?]> => {
  const raw = await get('Public/GetFxRates')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetFxRatesResult>(raw)
  return [result, raw]
}

export { getFxRates }
export type { GetFxRatesResult }
