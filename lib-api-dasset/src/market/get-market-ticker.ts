import { kanye, Kanye, APIError } from '@volatile/kanye'

import { requestOptions, getResponseBody } from '../util/client.js'
import { buildHeaders } from '../util/build-headers.js'

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

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye(`markets/${marketSymbol}/ticker`, {
    ...requestOptions,
    method: 'GET',
    headers,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetMarketTickerResult]>(raw)
  if (result instanceof Error) {
    const error = new APIError({
      message: 'Could not get market ticker from dasset.com',
      cause: result,
      context: {
        marketSymbol,
      },
    })
    return [error, raw]
  }

  return [result[0], raw]
}

export { getMarketTicker }
export type { GetMarketTickerOptions, GetMarketTickerResult }
