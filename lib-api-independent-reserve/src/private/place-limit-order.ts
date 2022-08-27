import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type PlaceLimitOrderOptions = {
  config: Config
  // The cryptocurrency code of limit order. Must be a valid primary currency,
  // which can be checked via the GetValidPrimaryCurrencyCodes method.
  primaryCurrencyCode: string
  // The fiat currency of limit order. Must be a valid secondary currency,
  // which can be checked via the GetValidSecondaryCurrencyCodes method.
  secondaryCurrencyCode: string
  // The type of limit order. Must be a valid limit order type, which can be
  // checked via the GetValidLimitOrderTypes method.
  orderType: string
  // The price in secondary currency to buy/sell.
  price: number
  // The volume to buy/sell in primary currency.
  volume: number
}

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.object({
  CreatedTimestampUtc: z.string(),
  OrderGuid: z.string(),
  Price: z.number(),
  PrimaryCurrencyCode: z.string(),
  ReservedAmount: z.number(),
  SecondaryCurrencyCode: z.string(),
  Status: z.enum(['Open', 'PartiallyFilled', 'Filled']),
  Type: z.enum(['LimitOffer', 'LimitBid']),
  VolumeFilled: z.number(),
  VolumeOrdered: z.number(),
})
/* eslint-enable @typescript-eslint/naming-convention */

type PlaceLimitOrderResult = z.infer<typeof responseSchema>

const placeLimitOrder = async (
  options: PlaceLimitOrderOptions,
): Promise<[PlaceLimitOrderResult | Error, Kanye?]> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    orderType,
    price,
    volume,
  } = options
  const raw = await post(config, 'Private/PlaceLimitOrder', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    orderType,
    price,
    volume,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { placeLimitOrder }
