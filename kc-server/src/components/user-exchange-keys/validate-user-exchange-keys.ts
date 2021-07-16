import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import type { Pool } from '../../types.js'
import { getUserExchangeKeys } from './get-user-exchange-keys.js'

const validateKiwiCoinKeys = async (
  kiwiCoinConfig: Record<string, string>,
): Promise<true | Error> => {
  if (!kiwiCoin.isValidConfig(kiwiCoinConfig)) {
    return new Error('userExchangeKeys is not a valid kiwi-coin.com config')
  }

  const balance = await kiwiCoin.balance(kiwiCoinConfig)
  if (balance instanceof Error) {
    const errorMessage = balance.toString()
    return new Error(`Could not query account balance. ${errorMessage}`)
  }

  return true
}

type ValidateUserExchangekeysOptions = {
  userUID: string
  exchangeUID: string
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
  options: ValidateUserExchangekeysOptions,
): Promise<ValidateUserExchangekeysResult | Error> => {
  const { userUID, exchangeUID } = options

  const userExchangeKeys = await getUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
  })
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const result = await validateKiwiCoinKeys(userExchangeKeys.keys)
  if (result instanceof Error) {
    return {
      isValid: false,
      validationMessage: result.toString(),
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
