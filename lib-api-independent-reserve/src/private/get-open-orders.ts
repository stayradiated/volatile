import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

type GetOpenOrdersOptions = {
  config: Config
  primaryCurrencyCode?: string // The primary currency of orders. This is an optional parameter.
  secondaryCurrencyCode?: string // The secondary currency of orders. This is an optional parameter.
  pageIndex: number // The page index. Must be greater or equal to 1
  pageSize: number // Must be greater or equal to 1 and less than or equal to 50. If a number greater than 50 is specified, then 50 will be used.
}

type GetOpenOrdersResult = {
  PageSize: number
  TotalItems: number
  TotalPages: number
  Data: Array<{
    AvgPrice: number
    CreatedTimestampUtc: string
    FeePercent: number
    OrderGuid: string
    OrderType: 'LimitOffer' | 'LimitBid'
    Outstanding: number
    Price: number
    PrimaryCurrencyCode: string
    SecondaryCurrencyCode: string
    Status: 'Open' | 'PartiallyFilled'
    Value: number
    Volume: number
  }>
}

const getOpenOrders = async (
  options: GetOpenOrdersOptions,
): Promise<GetOpenOrdersResult | Error> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  } = options
  return post(config, 'Private/GetOpenOrders', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  })
}

export { getOpenOrders }
