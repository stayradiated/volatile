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
  const { exchange_uid: exchangeUID, keys, description } = input
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const result = await insertUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (result instanceof Error) {
    return result
  }

  return {
    user_exchange_keys_uid: result.UID,
  }
}

export { createUserExchangeKeysHandler }
