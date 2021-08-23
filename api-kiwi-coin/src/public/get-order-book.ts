import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

type GetOrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const getOrderBook = async (): Promise<GetOrderBookResult | Error> => {
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

export { getOrderBook }
export type { GetOrderBookResult }
