import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

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

/* eslint-disable @typescript-eslint/naming-convention */
const orderSchema = z.object({
  // Unique order identifier
  OrderType: z.string(),
  // Order price in secondary currency
  Price: z.number(),
  // Order volume in primary currency
  Volume: z.number(),
})

const responseSchema = z.object({
  // List of all Buy Orders on order book
  BuyOrders: z.array(orderSchema),
  // List of all Sell Orders on order book
  SellOrders: z.array(orderSchema),
  // UTC timestamp of when the order book was generated
  CreatedTimestampUtc: z.string(),
  // The primary currency being shown
  PrimaryCurrencyCode: z.string(),
  // The secondary currency being used for pricing
  SecondaryCurrencyCode: z.string(),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetOrderBookResult = z.infer<typeof responseSchema>

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

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getOrderBook }
export type { GetOrderBookOptions, GetOrderBookResult }
