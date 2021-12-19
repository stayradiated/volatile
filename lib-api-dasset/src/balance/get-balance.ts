import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError, getCause } from '../util/error.js'
import { buildHeaders } from '../util/build-headers.js'
import type { Config } from '../util/types.js'

type Balance = {
  currencySymbol: string
  currencyName: string
  updatedAt?: string
  available: number
  inflight?: number
  total?: number
  nonce?: number
  held?: number
  nzdRate: number
  nzdValue: number
  btcValue: number
}

type GetBalanceOptions = {
  config: Config
  currencySymbol: string
}
type GetBalanceResult = Balance

const getBalance = async (
  options: GetBalanceOptions,
): Promise<GetBalanceResult | Error> => {
  const { config, currencySymbol } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    client
      .get(`balances/${currencySymbol}`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get balance from dasset.com',
      cause: await getCause(result),
      context: {
        currencySymbol,
      },
    })
  }

  return result[0] as GetBalanceResult
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
