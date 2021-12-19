import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { validateUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  user_exchange_keys_uid: string
}
type Output = {
  is_valid: boolean
  validation_message: string | undefined
  user_exchange_keys_uid: string
}
const validateUserExchangeKeysHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { user_exchange_keys_uid: userExchangeKeysUID } = input
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const result = await validateUserExchangeKeys(pool, userExchangeKeysUID)
  if (result instanceof Error) {
    return result
  }

  return {
    is_valid: result.isValid,
    validation_message: result.validationMessage,
    user_exchange_keys_uid: result.userExchangeKeysUID,
  }
}

export { validateUserExchangeKeysHandler }
