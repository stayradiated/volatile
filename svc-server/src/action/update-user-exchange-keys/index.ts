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
    user_exchange_keys_uid: userExchangeKeysUid,
    keys,
    description,
  } = input
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const error = await updateUserExchangeKeys(pool, {
    uid: userExchangeKeysUid,
    userUid,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_exchange_keys_uid: userExchangeKeysUid,
  }
}

export { updateUserExchangeKeysHandler }
