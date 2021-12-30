import { getExchange } from '../../model/exchange/index.js'

import {
  UserExchangeAPI,
  getUserExchangeAPI,
} from '../../exchange-api/index.js'

import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const getUserExchangeAPIByKeysUID = async (
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

  return getUserExchangeAPI({
    pool,
    exchange,
    config: userExchangeKeys.keys,
    userUID: userExchangeKeys.userUID,
    exchangeUID: userExchangeKeys.exchangeUID,
    userExchangeKeysUID,
  })
}

export { getUserExchangeAPIByKeysUID }
