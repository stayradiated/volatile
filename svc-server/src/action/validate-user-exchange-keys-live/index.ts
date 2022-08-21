import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { getUserExchangeApi } from '../../exchange-api/index.js'
import { getExchange } from '../../model/exchange/index.js'

type Input = {
  exchange_uid: string
  keys: Record<string, string>
}
type Output = {
  is_valid: boolean
  validation_message: string | undefined
}
const validateUserExchangeKeysLiveHandler: ActionHandlerFn<
  Input,
  Output
> = async (context) => {
  const { pool, input, session } = context
  const { exchange_uid: exchangeUid, keys } = input
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const exchange = await getExchange(pool, exchangeUid)
  if (exchange instanceof Error) {
    return exchange
  }

  const userExchangeApi = await getUserExchangeApi({
    pool,
    exchange,
    config: keys,
    userUid,
    exchangeUid,
    userExchangeKeysUid: undefined,
  })
  if (userExchangeApi instanceof Error) {
    return userExchangeApi
  }

  const balance = await userExchangeApi.getBalance()
  if (balance instanceof Error) {
    return {
      is_valid: false,
      validation_message: balance.message,
    }
  }

  return {
    is_valid: true,
    validation_message: undefined,
  }
}

export { validateUserExchangeKeysLiveHandler }
