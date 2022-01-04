import { kanye, Kanye, APIError } from '@volatile/kanye'

import { requestOptions, getResponseBody } from '../util/client.js'
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
): Promise<[GetMarketOrderBookResult | Error, Kanye?]> => {
  const { config, marketSymbol } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye(`markets/${marketSymbol}/orderbook`, {
    ...requestOptions(config),
    method: 'GET',
    headers,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetMarketOrderBookResult]>(raw)
  if (result instanceof Error) {
    const error = new APIError({
      message: 'Could not get market order book from dasset.com',
      cause: result,
      context: {
        marketSymbol,
      },
    })
    return [error, raw]
  }

  return [result[0], raw]
}

export { getMarketOrderBook }
export type { GetMarketOrderBookOptions, GetMarketOrderBookResult }
