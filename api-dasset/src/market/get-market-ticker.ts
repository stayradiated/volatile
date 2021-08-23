import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError } from '../util/error.js'
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
): Promise<GetMarketTickerResult | Error> => {
  const { config, marketSymbol } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<[GetMarketTickerResult]>(async () =>
    client
      .get(`markets/${marketSymbol}/ticker`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get market ticker from dasset.com',
      cause: result,
      context: {
        config,
        marketSymbol,
      },
    })
  }

  return result[0]
}

export { getMarketTicker }
export type { GetMarketTickerOptions, GetMarketTickerResult }
