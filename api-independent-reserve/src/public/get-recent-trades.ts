import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

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
): Promise<GetRecentTradesResult | Error> => {
  const {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfRecentTradesToRetrieve,
  } = options
  return errorBoundary(async () =>
    client
      .get('Public/GetRecentTrades', {
        searchParams: {
          primaryCurrencyCode,
          secondaryCurrencyCode,
          numberOfRecentTradesToRetrieve,
        },
      })
      .json(),
  )
}

export { getRecentTrades }
export type { GetRecentTradesOptions, GetRecentTradesResult }
