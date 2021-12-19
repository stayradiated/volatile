import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { updateUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  user_exchange_keys_uid: string
  keys?: Record<string, string>
  description?: string
}
type Output = {
  user_exchange_keys_uid: string
}
const updateUserExchangeKeysHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const {
    user_exchange_keys_uid: userExchangeKeysUID,
    keys,
    description,
  } = input
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const error = await updateUserExchangeKeys(pool, {
    UID: userExchangeKeysUID,
    userUID,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_exchange_keys_uid: userExchangeKeysUID,
  }
}

export { updateUserExchangeKeysHandler }
