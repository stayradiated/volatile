import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetTradeHistorySummaryOptions = {
  // The cryptocurrency for which to retrieve order book. Must be a valid
  // primary currency, which can be checked via the
  // GetValidPrimaryCurrencyCodes method.
  primaryCurrencyCode: string
  // The fiat currency in which to retrieve order book. Must be a valid secondary
  // currency, which can be checked via the GetValidSecondaryCurrencyCodes
  // method.
  secondaryCurrencyCode: string
  // How many past hours of historical summary data to retrieve (maximum is 240)
  numberOfHoursInThePastToRetrieve: number
}

type HistorySummaryItem = {
  //  Deprecated, not used
  AverageSecondaryCurrencyPrice: number
  //  Last traded price in hour
  ClosingSecondaryCurrencyPrice: number
  //  UTC Start time of hour
  StartTimestampUtc: string
  //  UTC End time of hour
  EndTimestampUtc: string
  //  Highest traded price during hour
  HighestSecondaryCurrencyPrice: number
  //  Lowest traded price during hour
  LowestSecondaryCurrencyPrice: number
  //  Number of trades executed during hour
  NumberOfTrades: number
  //  Opening traded price at start of hour
  OpeningSecondaryCurrencyPrice: number
  //  Volume of primary currency trade during hour
  PrimaryCurrencyVolume: number
  //  Deprecated, not used
  SecondaryCurrencyVolume: number
}

type GetTradeHistorySummaryResult = {
  // UTC timestamp of when the data was generated
  CreatedTimestampUtc: string
  // List of hourly summary blocks
  HistorySummaryItems: HistorySummaryItem[]
  // Number of past hours being returned
  NumberOfHoursInThePastToRetrieve: number
  // The primary currency being shown
  PrimaryCurrencyCode: string
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: string
}

const getTradeHistorySummary = async (
  options: GetTradeHistorySummaryOptions,
): Promise<GetTradeHistorySummaryResult | Error> => {
  const {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfHoursInThePastToRetrieve,
  } = options
  return errorBoundary(async () =>
    client
      .get('Public/GetTradeHistorySummary', {
        searchParams: {
          primaryCurrencyCode,
          secondaryCurrencyCode,
          numberOfHoursInThePastToRetrieve,
        },
      })
      .json(),
  )
}

export { getTradeHistorySummary }
export type { GetTradeHistorySummaryOptions, GetTradeHistorySummaryResult }
