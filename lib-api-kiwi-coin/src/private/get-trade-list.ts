import { Prism, formatWarnings } from '@zwolf/prism'

import { toBuySell, toDateFromSeconds } from '../util/transforms.js'
import { post } from '../util/client.js'
import type { Config } from '../util/types.js'

type GetTradeListOptions = {
  config: Config
  timeframe: 'minute' | 'hour' | 'day' | 'all'
}
type GetTradeListResponse = Array<{
  transaction_id: number
  order_id: number
  datetime: number
  trade_type: number
  trade_size: number
  price: number
  income: number
  fee: number
}>
type GetTradeListResult = Array<{
  transactionId: number
  orderId: number
  datetime: Date
  tradeType: 'BUY' | 'SELL'
  tradeSize: number
  price: number
  income: number
  fee: number
}>

const parseResponse = (
  data: GetTradeListResponse,
): GetTradeListResult | Error => {
  const $ = new Prism(data)

  const result: GetTradeListResult = $.toArray().map(
    ($item): GetTradeListResult[0] => ({
      transactionId: $item.get<number>('transaction_id').value ?? -1,
      orderId: $item.get<number>('order_id').value ?? -1,
      datetime:
        $item.get<number>('datetime').transform(toDateFromSeconds).value ??
        new Date(0),
      tradeType:
        $item.get<number>('trade_type').transform(toBuySell).value ?? 'BUY',
      tradeSize: $item.get<number>('trade_size').value ?? -1,
      price: $item.get<number>('price').value ?? -1,
      income: $item.get<number>('income').value ?? -1,
      fee: $item.get<number>('fee').value ?? -1,
    }),
  )

  if ($.warnings.length > 0) {
    return new Error(formatWarnings($.warnings, 'root', false))
  }

  return result
}

const getTradeList = async (
  options: GetTradeListOptions,
): Promise<GetTradeListResult | Error> => {
  const { config, timeframe } = options
  const data = await post<GetTradeListResponse>(config, 'trades', { timeframe })
  if (data instanceof Error) {
    return data
  }

  return parseResponse(data)
}

export { getTradeList }
export type { GetTradeListOptions, GetTradeListResult }
