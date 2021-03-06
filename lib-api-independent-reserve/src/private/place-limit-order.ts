import type { Kanye } from '@volatile/kanye'

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

type PlaceLimitOrderResult = {
  CreatedTimestampUtc: string
  OrderGuid: string
  Price: number
  PrimaryCurrencyCode: string
  ReservedAmount: number
  SecondaryCurrencyCode: string
  Status: 'Open' | 'PartiallyFilled' | 'Filled'
  Type: 'LimitOffer' | 'LimitBid'
  VolumeFilled: number
  VolumeOrdered: number
}

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

  const result = getResponseBody<PlaceLimitOrderResult>(raw)
  return [result, raw]
}

export { placeLimitOrder }
