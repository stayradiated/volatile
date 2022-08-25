import type { Kanye } from '@volatile/kanye'
import { Prism, formatWarnings } from '@zwolf/prism'

import { toFloat } from '../util/transforms.js'
import { post, getResponseBody } from '../util/client.js'
import type { Config } from '../util/types.js'

type GetBalanceOptions = {
  config: Config
}

type GetBalanceResponse = {
  nzd_available: string
  nzd_reserved: string
  nzd_balance: string
  btc_available: string
  btc_reserved: string
  btc_balance: string
  fee: string
  mmfee: string
}

type GetBalanceResult = {
  nzd: {
    available: number
    reserved: number
    balance: number
  }
  btc: {
    available: number
    reserved: number
    balance: number
  }
  fee: {
    marketTaker: number
    marketMaker: number
  }
}

const parseResponse = (data: GetBalanceResponse): GetBalanceResult | Error => {
  const $ = new Prism(data)

  const result: GetBalanceResult = {
    nzd: {
      available: $.get<string>('nzd_available').transform(toFloat).value ?? -1,
      reserved: $.get<string>('nzd_reserved').transform(toFloat).value ?? -1,
      balance: $.get<string>('nzd_balance').transform(toFloat).value ?? -1,
    },
    btc: {
      available: $.get<string>('btc_available').transform(toFloat).value ?? -1,
      reserved: $.get<string>('btc_reserved').transform(toFloat).value ?? -1,
      balance: $.get<string>('btc_balance').transform(toFloat).value ?? -1,
    },
    fee: {
      marketTaker: $.get<string>('fee').transform(toFloat).value ?? -1,
      marketMaker: $.get<string>('mmfee').transform(toFloat).value ?? -1,
    },
  }

  if ($.warnings.length > 0) {
    return new Error(formatWarnings($.warnings, 'root', false))
  }

  return result
}

const getBalance = async (
  options: GetBalanceOptions,
): Promise<[GetBalanceResult | Error, Kanye?]> => {
  const { config } = options

  const raw = await post(config, 'balance')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetBalanceResponse>(raw)
  if (result instanceof Error) {
    return [result, raw]
  }

  const balance = parseResponse(result)
  return [balance, raw]
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
