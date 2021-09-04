import { IllegalStateError, ConfigError } from '../../util/error.js'
import {
  getExchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_INDEPENDENT_RESERVE,
} from '../../model/exchange/index.js'

import {
  getDassetExchangeAPI,
  getKiwiCoinExchangeAPI,
  getIndependentReserveExchangeAPI,
  UserExchangeAPI,
} from '../../exchange-api/index.js'

import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const getUserExchangeAPI = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeAPI | Error> => {
  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const exchange = await getExchange(pool, userExchangeKeys.exchangeUID)
  if (exchange instanceof Error) {
    return exchange
  }

  const userExchangeAPI = await (async () => {
    switch (exchange) {
      case EXCHANGE_DASSET:
        return getDassetExchangeAPI(userExchangeKeys.keys)
      case EXCHANGE_KIWI_COIN:
        return getKiwiCoinExchangeAPI(userExchangeKeys.keys)
      case EXCHANGE_INDEPENDENT_RESERVE:
        return getIndependentReserveExchangeAPI(userExchangeKeys.keys)
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
        userExchangeKeysUID,
      },
    })
  }

  return userExchangeAPI
}

export { getUserExchangeAPI }
