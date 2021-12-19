import { get } from '../util/client.js'

type GetOrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const getOrderBook = async (): Promise<GetOrderBookResult | Error> =>
  get('order_book')

export { getOrderBook }
export type { GetOrderBookResult }
