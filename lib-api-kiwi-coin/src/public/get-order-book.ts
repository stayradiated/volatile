import { get, getResponseBody } from '../util/client.js'

type GetOrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const getOrderBook = async (): Promise<GetOrderBookResult | Error> => {
  const raw = await get('order_book')
  if (raw instanceof Error) {
    return raw
  }

  const orderBook = getResponseBody<GetOrderBookResult>(raw)
  return orderBook
}

export { getOrderBook }
export type { GetOrderBookResult }
