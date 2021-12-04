import { IllegalStateError, ConfigError } from '../util/error.js'
import {
  Exchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_INDEPENDENT_RESERVE,
} from '../model/exchange/index.js'

import { getDassetExchangeAPI } from './dasset.js'
import { getKiwiCoinExchangeAPI } from './kiwi-coin.js'
import { getIndependentReserveExchangeAPI } from './independent-reserve.js'
import type { UserExchangeAPI } from './types.js'

const getUserExchangeAPI = async (
  exchange: Exchange,
  config: Record<string, string>,
): Promise<UserExchangeAPI | Error> => {
  const userExchangeAPI = await (async () => {
    switch (exchange) {
      case EXCHANGE_DASSET:
        return getDassetExchangeAPI(config)
      case EXCHANGE_KIWI_COIN:
        return getKiwiCoinExchangeAPI(config)
      case EXCHANGE_INDEPENDENT_RESERVE:
        return getIndependentReserveExchangeAPI(config)
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
