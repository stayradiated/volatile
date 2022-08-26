import { IllegalStateError, ConfigError } from '../util/error.js'
import type { Exchange } from '../model/exchange/index.js'
import {
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_INDEPENDENT_RESERVE,
} from '../model/exchange/index.js'

import type { Pool } from '../types.js'
import { getDassetExchangeApi } from './dasset.js'
import { getKiwiCoinExchangeApi } from './kiwi-coin.js'
import { getIndependentReserveExchangeApi } from './independent-reserve.js'

import type { UserExchangeApi } from './types.js'

const getUserExchangeApi = async (options: {
  pool: Pool
  exchange: Exchange
  config: Record<string, string>
  userUid: string
  exchangeUid: string
  userExchangeKeysUid: string | undefined
}): Promise<UserExchangeApi | Error> => {
  const { exchange } = options

  const userExchangeApi = await (async () => {
    switch (exchange) {
      case EXCHANGE_DASSET:
        return getDassetExchangeApi(options)
      case EXCHANGE_KIWI_COIN:
        return getKiwiCoinExchangeApi(options)
      case EXCHANGE_INDEPENDENT_RESERVE:
        return getIndependentReserveExchangeApi(options)
      default:
        return new IllegalStateError({
          message: 'Unexpected exchange.',
          context: { exchange },
        })
    }
  })()
  if (userExchangeApi instanceof Error) {
    return new ConfigError({
      message: 'Could not read User Exchange Keys.',
      cause: userExchangeApi,
      context: {
        exchange,
      },
    })
  }

  return userExchangeApi
}

export { getUserExchangeApi }
