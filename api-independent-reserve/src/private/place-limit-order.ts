import { errorBoundary } from '@stayradiated/error-boundary'

import type { Config } from '../types.js'
import { createSignedBody } from '../signature.js'
import { client } from '../client.js'

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
): Promise<PlaceLimitOrderResult | Error> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    orderType,
    price,
    volume,
  } = options
  const endpoint = 'Private/PlaceLimitOrder'

  return errorBoundary(async () =>
    client
      .post(endpoint, {
        json: createSignedBody({
          config,
          endpoint,
          parameters: {
            primaryCurrencyCode,
            secondaryCurrencyCode,
            orderType,
            price,
            volume,
          },
        }),
      })
      .json(),
  )
}

export { placeLimitOrder }
