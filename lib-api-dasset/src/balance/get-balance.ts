import { kanye, Kanye, APIError } from '@volatile/kanye'

import { requestOptions, getResponseBody } from '../util/client.js'
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
): Promise<[GetBalanceResult | Error, Kanye?]> => {
  const { config, currencySymbol } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye(`balances/${currencySymbol}`, {
    ...requestOptions(config),
    method: 'GET',
    headers,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetBalanceResult]>(raw)
  if (result instanceof Error) {
    const error = new APIError({
      message: 'Could not get balance from dasset.com',
      cause: result,
      context: {
        currencySymbol,
      },
    })
    return [error, raw]
  }

  return [result[0], raw]
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
