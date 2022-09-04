import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { request, getResponseBody } from '../util/client.js'

import type { Config } from '../util/types.js'

type GetMarketTickerOptions = {
  config: Config
  marketSymbol: string
}

const getMarketTickerSchema = z.object({
  lastTradeRate: z.string(),
  bidRate: z.string(),
  askRate: z.string(),
  symbol: z.string(),
})

const responseSchema = z.tuple([getMarketTickerSchema])

type GetMarketTickerResult = z.infer<typeof getMarketTickerSchema>

const getMarketTicker = async (
  options: GetMarketTickerOptions,
): Promise<[GetMarketTickerResult | Error, Kanye?]> => {
  const { config, marketSymbol } = options

  const raw = await request({
    config,
    method: 'GET',
    endpoint: `markets/${marketSymbol}/ticker`,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
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
