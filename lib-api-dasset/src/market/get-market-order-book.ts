import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

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

  const raw = await get(config, `markets/${marketSymbol}/orderbook`)
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetMarketOrderBookResult]>(raw)
  if (result instanceof Error) {
    const error = new Error(
      `Could not get market order book from dasset.com.
${JSON.stringify({ marketSymbol })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { getMarketOrderBook }
export type { GetMarketOrderBookOptions, GetMarketOrderBookResult }
