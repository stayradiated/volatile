import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config } from '../util/types.js'

type Trade = {
  transaction_id: number
  order_id: number
  datetime: number
  trade_type: number
  trade_size: number
  price: number
  income: number
  fee: number
}

type GetTradeListOptions = {
  config: Config
  timeframe: 'minute' | 'hour' | 'day' | 'all'
}

type GetTradeListResult = Trade[]

const getTradeList = async (
  options: GetTradeListOptions,
): Promise<GetTradeListResult | Error> => {
  const { config, timeframe } = options
  const endpoint = 'trades'

  const body = createSignedBody(config, endpoint, { timeframe })
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary(async () =>
    client.post(endpoint, { body }).json(),
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

export { getTradeList }
export type { GetTradeListOptions, GetTradeListResult }
