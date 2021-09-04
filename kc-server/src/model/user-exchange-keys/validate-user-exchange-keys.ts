import type { Pool } from '../../types.js'
import { getUserExchangeAPI } from '../../model/user-exchange-keys/index.js'

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
  const userExchangeAPI = await getUserExchangeAPI(pool, userExchangeKeysUID)
  if (userExchangeAPI instanceof Error) {
    return {
      isValid: false,
      validationMessage: userExchangeAPI.message,
      userExchangeKeysUID,
    }
  }

  const balance = await userExchangeAPI.getBalance({ currency: 'NZD' })
  if (balance instanceof Error) {
    return {
      isValid: false,
      validationMessage: balance.message,
      userExchangeKeysUID,
    }
  }

  return {
    isValid: true,
    validationMessage: undefined,
    userExchangeKeysUID,
  }
}

export { validateUserExchangeKeys }
