import type { Kanye } from '@volatile/kanye'

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

type Trade = {
  PrimaryCurrencyAmount: number
  SecondaryCurrencyTradePrice: number
  TradeTimestampUtc: string
}

type GetRecentTradesResult = {
  CreatedTimestampUtc: string
  PrimaryCurrencyCode: string
  SecondaryCurrencyCode: string
  Trades: Trade[]
}

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

  const result = getResponseBody<GetRecentTradesResult>(raw)
  return [result, raw]
}

export { getRecentTrades }
export type { GetRecentTradesOptions, GetRecentTradesResult }
