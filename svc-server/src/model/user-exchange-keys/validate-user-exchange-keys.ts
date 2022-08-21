import type { Pool } from '../../types.js'
import { getUserExchangeApiByKeysUid } from '../../model/user-exchange-keys/index.js'

type ValidateUserExchangekeysResultValid = {
  isValid: true
  validationMessage: undefined
  userExchangeKeysUid: string
}

type ValidateUserExchangekeysResultInvalid = {
  isValid: false
  validationMessage: string
  userExchangeKeysUid: string
}

type ValidateUserExchangekeysResult =
  | ValidateUserExchangekeysResultValid
  | ValidateUserExchangekeysResultInvalid

const validateUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUid: string,
): Promise<ValidateUserExchangekeysResult | Error> => {
  const userExchangeApi = await getUserExchangeApiByKeysUid(
    pool,
    userExchangeKeysUid,
  )
  if (userExchangeApi instanceof Error) {
    return {
      isValid: false,
      validationMessage: userExchangeApi.message,
      userExchangeKeysUid,
    }
  }

  const balance = await userExchangeApi.getBalance()
  if (balance instanceof Error) {
    return {
      isValid: false,
      validationMessage: balance.message,
      userExchangeKeysUid,
    }
  }

  return {
    isValid: true,
    validationMessage: undefined,
    userExchangeKeysUid,
  }
}

export { validateUserExchangeKeys }
