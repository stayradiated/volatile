import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncExchangeOpenOrderList } from '../../model/order/index.js'

type Input = {
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
    user_exchange_keys_uid: userExchangeKeysUID,
  } = input

  const error = await syncExchangeOpenOrderList(pool, {
    userUID,
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
