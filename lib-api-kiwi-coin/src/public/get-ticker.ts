import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'

type GetTickerResult = {
  last: number
  date: number
  high: number
  low: number
  vwap: number
  volume: number
  bid: number
  ask: number
}

const getTicker = async (): Promise<[GetTickerResult | Error, Kanye?]> => {
  const raw = await get('ticker')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const ticker = getResponseBody<GetTickerResult>(raw)
  return [ticker, raw]
}

export { getTicker }
export type { GetTickerResult }
