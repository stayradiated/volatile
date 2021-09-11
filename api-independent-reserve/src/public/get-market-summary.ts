import { get } from '../util/client.js'

type GetMarketSummaryOptions = {
  // The cryptocurrency for which to retrieve order book. Must be a valid
  // primary currency, which can be checked via the
  // GetValidPrimaryCurrencyCodes method.
  primaryCurrencyCode: string
  // The fiat currency in which to retrieve order book. Must be a valid secondary
  // currency, which can be checked via the GetValidSecondaryCurrencyCodes
  // method.
  secondaryCurrencyCode: string
}

type GetMarketSummaryResult = {
  // UTC timestamp of when the market summary was generated
  CreatedTimestampUtc: string
  // Current highest bid on order book
  CurrentHighestBidPrice: number
  // Current lowest offer on order book
  CurrentLowestOfferPrice: number
  // Weighted average traded price over last 24 hours
  DayAvgPrice: number
  // Highest traded price over last 24 hours
  DayHighestPrice: number
  // Lowest traded price over last 24 hours
  DayLowestPrice: number
  // Volume of primary currency traded in last 24 hours
  DayVolumeXbt: number
  // Volume of primary currency traded in last 24 hours for chosen secondary currency
  DayVolumeXbtInSecondaryCurrrency: number
  // Last traded price
  LastPrice: number
  // The primary currency being summarised
  PrimaryCurrencyCode: string
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: string
}

const getMarketSummary = async (
  options: GetMarketSummaryOptions,
): Promise<GetMarketSummaryResult | Error> => {
  const { primaryCurrencyCode, secondaryCurrencyCode } = options
  return get('Public/GetMarketSummary', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
  })
}

export { getMarketSummary }
export type { GetMarketSummaryOptions, GetMarketSummaryResult }
