import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

type TickerResult = {
  last: number
  date: number
  high: number
  low: number
  vwap: number
  volume: number
  bid: number
  ask: number
}

const ticker = async (): Promise<TickerResult | Error> => {
  const result = await errorBoundary(async () => client.get('ticker').json())
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch ticker from kiwi-coin.com',
      cause: result,
    })
  }

  return result
}

export { ticker }
export type { TickerResult }
