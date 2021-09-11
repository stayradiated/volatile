import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

type GetTradesOptions = {
  config: Config
  pageIndex: number // The page index. Must be greater or equal to 1
  pageSize: number // Must be greater or equal to 1 and less than or equal to 50. If a number greater than 50 is specified, then 50 will be used.
}

type GetTradesResult = {
  PageSize: number
  TotalItems: number
  TotalPages: number
  Data: Array<{
    TradeGuid: string
    TradeTimestampUtc: string
    OrderGuid: string
    OrderType: 'LimitBid' | 'LimitOffer' | 'MarketBid' | 'MarketOffer'
    OrderTimestampUtc: string
    VolumeTraded: number
    Price: number
    PrimaryCurrencyCode: string
    SecondaryCurrencyCode: string
  }>
}

const getTrades = async (
  options: GetTradesOptions,
): Promise<GetTradesResult | Error> => {
  const { config, pageIndex, pageSize } = options
  return post(config, 'Private/GetTrades', {
    pageIndex,
    pageSize,
  })
}

export { getTrades }
