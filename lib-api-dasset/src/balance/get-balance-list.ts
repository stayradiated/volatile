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

type GetBalanceListOptions = {
  config: Config
}
type GetBalanceListResult = Balance[]

const getBalanceList = async (
  options: GetBalanceListOptions,
): Promise<[GetBalanceListResult | Error, Kanye?]> => {
  const { config } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye('balances', {
    ...requestOptions(config),
    method: 'GET',
    headers,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetBalanceListResult>(raw)
  if (result instanceof Error) {
    const error = new APIError({
      message: 'Could not get balance list from dasset.com',
      cause: result,
    })
    return [error, raw]
  }

  return [result, raw]
}

export { getBalanceList }
export type { GetBalanceListOptions, GetBalanceListResult }
