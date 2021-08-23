import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config } from '../util/types.js'

type GetBalanceOptions = {
  config: Config
}

type GetBalanceResult = {
  nzd_available: string
  nzd_reserved: string
  nzd_balance: string
  btc_available: string
  btc_reserved: string
  btc_balance: string
  fee: string
  mmfee: string
}

const getBalance = async (
  options: GetBalanceOptions,
): Promise<GetBalanceResult | Error> => {
  const { config } = options

  const endpoint = 'balance'

  const body = createSignedBody(config, endpoint)
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary(async () =>
    client.post(endpoint, { body }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch balance from kiwi-coin.com',
      cause: result,
      context: {
        config,
      },
    })
  }

  return result
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
