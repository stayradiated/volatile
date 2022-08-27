import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

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

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.object({
  // UTC timestamp of when the market summary was generated
  CreatedTimestampUtc: z.string(),
  // Current highest bid on order book
  CurrentHighestBidPrice: z.number(),
  // Current lowest offer on order book
  CurrentLowestOfferPrice: z.number(),
  // Weighted average traded price over last 24 hours
  DayAvgPrice: z.number(),
  // Highest traded price over last 24 hours
  DayHighestPrice: z.number(),
  // Lowest traded price over last 24 hours
  DayLowestPrice: z.number(),
  // Volume of primary currency traded in last 24 hours
  DayVolumeXbt: z.number(),
  // Volume of primary currency traded in last 24 hours for chosen secondary currency
  DayVolumeXbtInSecondaryCurrrency: z.number(),
  // Last traded price
  LastPrice: z.number(),
  // The primary currency being summarised
  PrimaryCurrencyCode: z.string(),
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: z.string(),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetMarketSummaryResult = z.infer<typeof responseSchema>

const getMarketSummary = async (
  options: GetMarketSummaryOptions,
): Promise<[GetMarketSummaryResult | Error, Kanye?]> => {
  const { primaryCurrencyCode, secondaryCurrencyCode } = options
  const raw = await get('Public/GetMarketSummary', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getMarketSummary }
export type { GetMarketSummaryOptions, GetMarketSummaryResult }
