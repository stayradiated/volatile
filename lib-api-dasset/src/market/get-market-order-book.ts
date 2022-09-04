import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { request, getResponseBody } from '../util/client.js'

import type { Config } from '../util/types.js'

type GetMarketOrderBookOptions = {
  config: Config
  marketSymbol: string
}

const getMarketOrderBookSchema = z.object({
  bid: z.array(
    z.object({
      quantity: z.string(),
      rate: z.string(),
    }),
  ),
  ask: z.array(
    z.object({
      quantity: z.string(),
      rate: z.string(),
    }),
  ),
})

const responseSchema = z.tuple([getMarketOrderBookSchema])

type GetMarketOrderBookResult = z.infer<typeof getMarketOrderBookSchema>

const getMarketOrderBook = async (
  options: GetMarketOrderBookOptions,
): Promise<[GetMarketOrderBookResult | Error, Kanye?]> => {
  const { config, marketSymbol } = options

  const raw = await request({
    config,
    method: 'GET',
    endpoint: `markets/${marketSymbol}/orderbook`,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
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
