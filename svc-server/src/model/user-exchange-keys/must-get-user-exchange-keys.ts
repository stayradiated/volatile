import * as kiwiCoin from '@volatile/kiwi-coin-api'
import * as dasset from '@volatile/dasset-api'

import { ConfigError } from '../../util/error.js'
import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

import type { UserExchangeKeys } from './types.js'

const mustGetUserDassetExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeKeys<dasset.Config> | Error> => {
  const keys = await getUserExchangeKeys<dasset.Config>(
    pool,
    userExchangeKeysUID,
  )
  if (keys instanceof Error) {
    return new ConfigError({
      message: 'Could not get user exchange keys.',
      cause: keys,
      context: { userExchangeKeysUID },
    })
  }

  if (!dasset.isValidConfig(keys.keys)) {
    return new ConfigError({
      message: 'User Exchange Keys are not valid for dassetx.com exchange',
      context: { userExchangeKeysUID },
    })
  }

  return keys
}

const mustGetUserKiwiCoinExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeKeys<kiwiCoin.Config> | Error> => {
  const keys = await getUserExchangeKeys<kiwiCoin.Config>(
    pool,
    userExchangeKeysUID,
  )
  if (keys instanceof Error) {
    return new ConfigError({
      message: 'Could not get user exchange keys.',
      cause: keys,
      context: { userExchangeKeysUID },
    })
  }

  if (!kiwiCoin.isValidConfig(keys.keys)) {
    return new ConfigError({
      message: 'User Exchange Keys are not valid for kiwi-coin.com exchange',
      context: { userExchangeKeysUID },
    })
  }

  return keys
}

export { mustGetUserKiwiCoinExchangeKeys, mustGetUserDassetExchangeKeys }
