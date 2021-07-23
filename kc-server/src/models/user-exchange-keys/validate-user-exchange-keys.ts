import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import * as dasset from '@stayradiated/dasset-api'

import { explainError } from '../../utils/error.js'

import type { Pool } from '../../types.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
  EXCHANGE_DASSET,
} from '../exchange/index.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const validateDassetKeys = async (
  config: Record<string, string>,
): Promise<true | Error> => {
  if (!dasset.isValidConfig(config)) {
    return new Error('userExchangeKeys is not a valid kiwi-coin.com config')
  }

  const balance = await dasset.balanceSingle(config, 'NZD')
  if (balance instanceof Error) {
    return explainError('Could not query account balance.', undefined, balance)
  }

  return true
}

const validateKiwiCoinKeys = async (
  config: Record<string, string>,
): Promise<true | Error> => {
  if (!kiwiCoin.isValidConfig(config)) {
    return new Error('userExchangeKeys is not a valid kiwi-coin.com config')
  }

  const balance = await kiwiCoin.balance(config)
  if (balance instanceof Error) {
    return explainError('Could not query account balance.', undefined, balance)
  }

  return true
}

type ValidateUserExchangekeysResultValid = {
  isValid: true
  validationMessage: undefined
  userExchangeKeysUID: string
}

type ValidateUserExchangekeysResultInvalid = {
  isValid: false
  validationMessage: string
  userExchangeKeysUID: string
}

type ValidateUserExchangekeysResult =
  | ValidateUserExchangekeysResultValid
  | ValidateUserExchangekeysResultInvalid

const validateUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<ValidateUserExchangekeysResult | Error> => {
  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const kiwiCoinExchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  const dassetExchangeUID = await getExchangeUID(pool, EXCHANGE_DASSET)

  const result = (async (): Promise<true | Error> => {
    switch (userExchangeKeys.exchangeUID) {
      case kiwiCoinExchangeUID: {
        return validateKiwiCoinKeys(userExchangeKeys.keys)
      }

      case dassetExchangeUID: {
        return validateDassetKeys(userExchangeKeys.keys)
      }

      default: {
        return new Error('Unable to validate config for this exchange')
      }
    }
  })()

  if (result instanceof Error) {
    return {
      isValid: false,
      validationMessage: result.message,
      userExchangeKeysUID: userExchangeKeys.UID,
    }
  }

  return {
    isValid: true,
    validationMessage: undefined,
    userExchangeKeysUID: userExchangeKeys.UID,
  }
}

export { validateUserExchangeKeys }
