import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { insertUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  exchange_uid: string
  keys: Record<string, string>
  description: string
}
type Output = {
  user_exchange_keys_uid: string
}
const createUserExchangeKeysHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { exchange_uid: exchangeUid, keys, description } = input
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const result = await insertUserExchangeKeys(pool, {
    userUid,
    exchangeUid,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (result instanceof Error) {
    return result
  }

  return {
    user_exchange_keys_uid: result.uid,
  }
}

export { createUserExchangeKeysHandler }
