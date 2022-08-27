import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

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

/* eslint-disable @typescript-eslint/naming-convention */
const historySummaryItemSchema = z.object({
  //  Deprecated, not used
  AverageSecondaryCurrencyPrice: z.number(),
  //  Last traded price in hour
  ClosingSecondaryCurrencyPrice: z.number(),
  //  UTC Start time of hour
  StartTimestampUtc: z.string(),
  //  UTC End time of hour
  EndTimestampUtc: z.string(),
  //  Highest traded price during hour
  HighestSecondaryCurrencyPrice: z.number(),
  //  Lowest traded price during hour
  LowestSecondaryCurrencyPrice: z.number(),
  //  Number of trades executed during hour
  NumberOfTrades: z.number(),
  //  Opening traded price at start of hour
  OpeningSecondaryCurrencyPrice: z.number(),
  //  Volume of primary currency trade during hour
  PrimaryCurrencyVolume: z.number(),
  //  Deprecated, not used
  SecondaryCurrencyVolume: z.number(),
})

const responseSchema = z.object({
  // UTC timestamp of when the data was generated
  CreatedTimestampUtc: z.string(),
  // List of hourly summary blocks
  HistorySummaryItems: z.array(historySummaryItemSchema),
  // Number of past hours being returned
  NumberOfHoursInThePastToRetrieve: z.number(),
  // The primary currency being shown
  PrimaryCurrencyCode: z.string(),
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: z.string(),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetTradeHistorySummaryResult = z.infer<typeof responseSchema>

const getTradeHistorySummary = async (
  options: GetTradeHistorySummaryOptions,
): Promise<[GetTradeHistorySummaryResult | Error, Kanye?]> => {
  const {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfHoursInThePastToRetrieve,
  } = options
  const raw = await get('Public/GetTradeHistorySummary', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfHoursInThePastToRetrieve,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getTradeHistorySummary }
export type { GetTradeHistorySummaryOptions, GetTradeHistorySummaryResult }
