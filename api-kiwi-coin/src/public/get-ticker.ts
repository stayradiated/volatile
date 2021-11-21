import { get } from '../util/client.js'

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

const getTicker = async (): Promise<GetTickerResult | Error> => get('ticker')

export { getTicker }
export type { GetTickerResult }
