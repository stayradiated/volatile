import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import { explainError } from '../../utils/error.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
} from '../../models/exchange/index.js'
import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

type MustGetUserExchangeKeysOptions = {
  userUID: string
}

const mustGetUserKiwiCoinExchangeKeys = async (
  pool: Pool,
  options: MustGetUserExchangeKeysOptions,
): Promise<kiwiCoin.Config | Error> => {
  const { userUID } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
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

  const config = userExchangeKeys.keys
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

export { mustGetUserKiwiCoinExchangeKeys }
