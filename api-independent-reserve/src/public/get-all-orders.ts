import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../client.js'

type GetAllOrdersOptions = {
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
  // Unique order identifier
  Guid: string
  // Order price in secondary currency
  Price: number
  // Order volume in primary currency
  Volume: number
}

type GetAllOrdersResult = {
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

const getAllOrders = async (
  options: GetAllOrdersOptions,
): Promise<GetAllOrdersResult | Error> => {
  const { primaryCurrencyCode, secondaryCurrencyCode } = options
  return errorBoundary(async () =>
    client
      .get('Public/GetAllOrders', {
        searchParams: {
          primaryCurrencyCode,
          secondaryCurrencyCode,
        },
      })
      .json(),
  )
}

export { getAllOrders }
export type { GetAllOrdersOptions, GetAllOrdersResult }
