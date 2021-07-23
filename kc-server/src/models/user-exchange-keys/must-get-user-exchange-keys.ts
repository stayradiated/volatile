import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import * as dasset from '@stayradiated/dasset-api'

import { explainError } from '../../utils/error.js'
import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const mustGetUserDassetExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<dasset.Config | Error> => {
  const keys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (keys instanceof Error) {
    return keys
  }

  const config = keys.keys

  if (!dasset.isValidConfig(config)) {
    return explainError(
      'user_exchange_keys are not valid for dassetx.com exchange',
      {
        userExchangeKeysUID,
      },
    )
  }

  return config
}

const mustGetUserKiwiCoinExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<kiwiCoin.Config | Error> => {
  const keys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (keys instanceof Error) {
    return keys
  }

  const config = keys.keys

  if (!kiwiCoin.isValidConfig(config)) {
    return explainError(
      'user_exchange_keys are not valid for kiwi-coin.com exchange',
      {
        userExchangeKeysUID,
      },
    )
  }

  return config
}

export { mustGetUserKiwiCoinExchangeKeys, mustGetUserDassetExchangeKeys }
