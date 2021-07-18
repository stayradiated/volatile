import { ActionHandlerFn } from '../../utils/action-handler.js'
import { setUserExchangeKeys } from '../../models/user-exchange-keys/index.js'

type Input = {
  exchange_uid: string
  keys: Record<string, string>
  description: string
}
type Output = {
  user_exchange_keys_uid: string
}
const setUserExchangeKeysHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { exchange_uid: exchangeUID, keys, description } = input
  const { userUID } = session

  const result = await setUserExchangeKeys(pool, {
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

export { setUserExchangeKeysHandler }
