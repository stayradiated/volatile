import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError, getCause } from '../util/error.js'
import { buildHeaders } from '../util/build-headers.js'
import type { Config } from '../util/types.js'

type GetMarketOrderBookOptions = {
  config: Config
  marketSymbol: string
}

type GetMarketOrderBookResult = {
  bid: Array<{
    quantity: string
    rate: string
  }>
  ask: Array<{
    quantity: string
    rate: string
  }>
}

const getMarketOrderBook = async (
  options: GetMarketOrderBookOptions,
): Promise<GetMarketOrderBookResult | Error> => {
  const { config, marketSymbol } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<[GetMarketOrderBookResult]>(async () =>
    client
      .get(`markets/${marketSymbol}/orderbook`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get market order book from dasset.com',
      cause: await getCause(result),
      context: {
        marketSymbol,
      },
    })
  }

  return result[0]
}

export { getMarketOrderBook }
export type { GetMarketOrderBookOptions, GetMarketOrderBookResult }
