import type { Kanye } from '@volatile/kanye'

import { get, getResponseBody } from '../util/client.js'
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

  const raw = await get(config, 'balances')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetBalanceListResult>(raw)
  if (result instanceof Error) {
    const error = new Error('Could not get balance list from dasset.com', {
      cause: result,
    })
    return [error, raw]
  }

  return [result, raw]
}

export { getBalanceList }
export type { GetBalanceListOptions, GetBalanceListResult }
