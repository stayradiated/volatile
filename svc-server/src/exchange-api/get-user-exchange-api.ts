import { IllegalStateError, ConfigError } from '../util/error.js'
import {
  Exchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_INDEPENDENT_RESERVE,
} from '../model/exchange/index.js'

import type { Pool } from '../types.js'
import { getDassetExchangeAPI } from './dasset.js'
import { getKiwiCoinExchangeAPI } from './kiwi-coin.js'
import { getIndependentReserveExchangeAPI } from './independent-reserve.js'

import type { UserExchangeAPI } from './types.js'

const getUserExchangeAPI = async (options: {
  pool: Pool
  exchange: Exchange
  config: Record<string, string>
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string | undefined
}): Promise<UserExchangeAPI | Error> => {
  const { exchange } = options

  const userExchangeAPI = await (async () => {
    switch (exchange) {
      case EXCHANGE_DASSET:
        return getDassetExchangeAPI(options)
      case EXCHANGE_KIWI_COIN:
        return getKiwiCoinExchangeAPI(options)
      case EXCHANGE_INDEPENDENT_RESERVE:
        return getIndependentReserveExchangeAPI(options)
      default:
        return new IllegalStateError({
          message: 'Unexpected exchange.',
          context: { exchange },
        })
    }
  })()
  if (userExchangeAPI instanceof Error) {
    return new ConfigError({
      message: 'Could not read User Exchange Keys.',
      cause: userExchangeAPI,
      context: {
        exchange,
      },
    })
  }

  return userExchangeAPI
}

export { getUserExchangeAPI }
