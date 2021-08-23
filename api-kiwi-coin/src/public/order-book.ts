import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

type OrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const orderBook = async (): Promise<OrderBookResult | Error> => {
  const result = await errorBoundary(async () =>
    client.get('order_book').json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch order book from kiwi-coin.com',
      cause: result,
    })
  }

  return result
}

export { orderBook }
export type { OrderBookResult }
