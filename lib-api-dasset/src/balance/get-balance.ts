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

type GetBalanceOptions = {
  config: Config
  currencySymbol: string
}
type GetBalanceResult = Balance

const getBalance = async (
  options: GetBalanceOptions,
): Promise<[GetBalanceResult | Error, Kanye?]> => {
  const { config, currencySymbol } = options

  const raw = await get(config, `balances/${currencySymbol}`)
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetBalanceResult]>(raw)
  if (result instanceof Error) {
    const error = new Error(
      `Could not get balance from dasset.com.
${JSON.stringify({ currencySymbol })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
