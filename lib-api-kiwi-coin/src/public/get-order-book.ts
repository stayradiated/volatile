import { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetOrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const getOrderBook = async (): Promise<
  [GetOrderBookResult | Error, Kanye?]
> => {
  const raw = await get('order_book')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const orderBook = getResponseBody<GetOrderBookResult>(raw)
  return [orderBook, raw]
}

export { getOrderBook }
export type { GetOrderBookResult }
