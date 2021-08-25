import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncExchangeOpenOrderList } from '../../model/order/index.js'

type Input = {
  exchange_uid: string
  user_exchange_keys_uid: string
}

type Output = {
  user_uid: string
}

const syncExchangeOpenOrderListHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { input, pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const {
    exchange_uid: exchangeUID,
    user_exchange_keys_uid: userExchangeKeysUID,
  } = input

  const error = await syncExchangeOpenOrderList(pool, {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { syncExchangeOpenOrderListHandler }
