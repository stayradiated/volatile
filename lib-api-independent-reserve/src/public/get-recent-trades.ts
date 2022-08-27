import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { get, getResponseBody } from '../util/client.js'

type GetRecentTradesOptions = {
  // The cryptocurrency for which to retrieve order book. Must be a valid
  // primary currency, which can be checked via the
  // GetValidPrimaryCurrencyCodes method.
  primaryCurrencyCode: string
  // The fiat currency in which to retrieve order book. Must be a valid secondary
  // currency, which can be checked via the GetValidSecondaryCurrencyCodes
  // method.
  secondaryCurrencyCode: string
  // How many recent trades to retrieve (maximum is 50)
  numberOfRecentTradesToRetrieve: number
}

/* eslint-disable @typescript-eslint/naming-convention */
const tradeSchema = z.object({
  PrimaryCurrencyAmount: z.number(),
  SecondaryCurrencyTradePrice: z.number(),
  TradeTimestampUtc: z.string(),
})

const responseSchema = z.object({
  CreatedTimestampUtc: z.string(),
  PrimaryCurrencyCode: z.string(),
  SecondaryCurrencyCode: z.string(),
  Trades: z.array(tradeSchema),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetRecentTradesResult = z.infer<typeof responseSchema>

const getRecentTrades = async (
  options: GetRecentTradesOptions,
): Promise<[GetRecentTradesResult | Error, Kanye?]> => {
  const {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfRecentTradesToRetrieve,
  } = options
  const raw = await get('Public/GetRecentTrades', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfRecentTradesToRetrieve,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getRecentTrades }
export type { GetRecentTradesOptions, GetRecentTradesResult }
