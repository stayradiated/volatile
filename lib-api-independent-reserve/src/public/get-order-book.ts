import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetOrderBookOptions = {
  // The cryptocurrency for which to retrieve order book. Must be a valid
  // primary currency, which can be checked via the
  // GetValidPrimaryCurrencyCodes method.
  primaryCurrencyCode: string
  // The fiat currency in which to retrieve order book. Must be a valid secondary
  // currency, which can be checked via the GetValidSecondaryCurrencyCodes
  // method.
  secondaryCurrencyCode: string
}

type Order = {
  // Type of order
  OrderType: string
  // Order price in secondary currency
  Price: number
  // Order volume in primary currency
  Volume: number
}

type GetOrderBookResult = {
  // List of all Buy Orders on order book
  BuyOrders: Order[]
  // List of all Sell Orders on order book
  SellOrders: Order[]
  // UTC timestamp of when the order book was generated
  CreatedTimestampUtc: string
  // The primary currency being shown
  PrimaryCurrencyCode: string
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: string
}

const getOrderBook = async (
  options: GetOrderBookOptions,
): Promise<[GetOrderBookResult | Error, Kanye?]> => {
  const { primaryCurrencyCode, secondaryCurrencyCode } = options
  const raw = await get('Public/GetOrderBook', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetOrderBookResult>(raw)
  return [result, raw]
}

export { getOrderBook }
export type { GetOrderBookOptions, GetOrderBookResult }
