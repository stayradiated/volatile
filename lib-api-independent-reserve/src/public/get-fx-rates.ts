import { get } from '../util/client.js'

// Returns a list of exchange rates used by Independing Reserve when depositing
// funds or withdrawing funds from accounts.
type GetFxRatesResult = Array<{
  CurrencyCodeA: string
  CurrencyCodeB: string
  Rate: number
}>

const getFxRates = async (): Promise<GetFxRatesResult | Error> =>
  get('Public/GetFxRates')

export { getFxRates }
export type { GetFxRatesResult }
