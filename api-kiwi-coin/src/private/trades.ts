import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config } from '../util/types.js'

type Timeframe = 'minute' | 'hour' | 'day' | 'all'

type TradesResult = Array<{
  transaction_id: number
  order_id: number
  datetime: number
  trade_type: number
  trade_size: number
  price: number
  income: number
  fee: number
}>

const trades = async (
  config: Config,
  timeframe: Timeframe,
): Promise<TradesResult | Error> => {
  const endpoint = 'trades'
  const result = await errorBoundary(async () =>
    client
      .post(endpoint, {
        body: createSignedBody(config, endpoint, { timeframe }),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch trades from kiwi-coin.com',
      cause: result,
      context: {
        config,
        timeframe,
      },
    })
  }

  return result
}

export { trades }
export type { Timeframe, TradesResult }
