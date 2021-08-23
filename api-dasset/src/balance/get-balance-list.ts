import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError } from '../util/error.js'
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

type GetBalanceListOptions = {
  config: Config
}
type GetBalanceListResult = Balance[]

const getBalanceList = async (
  options: GetBalanceListOptions,
): Promise<GetBalanceListResult | Error> => {
  const { config } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    client.get('balances', { headers }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get balance list from dasset.com',
      cause: result,
      context: {
        config,
      },
    })
  }

  return result as GetBalanceListResult
}

export { getBalanceList }
export type { GetBalanceListOptions, GetBalanceListResult }
