import { getExchange } from '../../model/exchange/index.js'

import type { UserExchangeApi } from '../../exchange-api/index.js'
import { getUserExchangeApi } from '../../exchange-api/index.js'

import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const getUserExchangeApiByKeysUid = async (
  pool: Pool,
  userExchangeKeysUid: string,
): Promise<UserExchangeApi | Error> => {
  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUid)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const exchange = await getExchange(pool, userExchangeKeys.exchangeUid)
  if (exchange instanceof Error) {
    return exchange
  }

  return getUserExchangeApi({
    pool,
    exchange,
    config: userExchangeKeys.keys,
    userUid: userExchangeKeys.userUid,
    exchangeUid: userExchangeKeys.exchangeUid,
    userExchangeKeysUid,
  })
}

export { getUserExchangeApiByKeysUid }
