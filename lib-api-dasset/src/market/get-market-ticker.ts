import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

import type { Config } from '../util/types.js'

type GetMarketTickerOptions = {
  config: Config
  marketSymbol: string
}

type GetMarketTickerResult = {
  lastTradeRate: string
  bidRate: string
  askRate: string
  symbol: string
}

const getMarketTicker = async (
  options: GetMarketTickerOptions,
): Promise<[GetMarketTickerResult | Error, Kanye?]> => {
  const { config, marketSymbol } = options

  const raw = await get(config, `markets/${marketSymbol}/ticker`)
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetMarketTickerResult]>(raw)
  if (result instanceof Error) {
    const error = new Error(
      `Could not get market ticker from dasset.com.
${JSON.stringify({ marketSymbol })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { getMarketTicker }
export type { GetMarketTickerOptions, GetMarketTickerResult }
