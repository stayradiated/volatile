import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import * as dasset from '@stayradiated/dasset-api'

import { explainError } from '../../utils/error.js'
import {
  Exchange,
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_DASSET,
} from '../../models/exchange/index.js'
import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

type MustGetUserExchangeKeysOptions = {
  userUID: string
}

const mustGetUserExchangeKeys = async (
  pool: Pool,
  exchange: Exchange,
  options: MustGetUserExchangeKeysOptions,
): Promise<Record<string, string> | Error> => {
  const { userUID } = options

  const exchangeUID = await getExchangeUID(pool, exchange)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const userExchangeKeys = await getUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
  })
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  return userExchangeKeys.keys
}

const mustGetUserDassetExchangeKeys = async (
  pool: Pool,
  options: MustGetUserExchangeKeysOptions,
): Promise<dasset.Config | Error> => {
  const { userUID } = options
  const config = await mustGetUserExchangeKeys(pool, EXCHANGE_DASSET, {
    userUID,
  })
  if (config instanceof Error) {
    return config
  }

  if (!dasset.isValidConfig(config)) {
    return explainError(
      'user_exchange_keys are not valid for dassetx.com exchange',
      {
        userUID,
      },
    )
  }

  return config
}

const mustGetUserKiwiCoinExchangeKeys = async (
  pool: Pool,
  options: MustGetUserExchangeKeysOptions,
): Promise<kiwiCoin.Config | Error> => {
  const { userUID } = options
  const config = await mustGetUserExchangeKeys(pool, EXCHANGE_KIWI_COIN, {
    userUID,
  })
  if (config instanceof Error) {
    return config
  }

  if (!kiwiCoin.isValidConfig(config)) {
    return explainError(
      'user_exchange_keys are not valid for kiwi-coin.com exchange',
      {
        userUID,
      },
    )
  }

  return config
}

export { mustGetUserKiwiCoinExchangeKeys, mustGetUserDassetExchangeKeys }
