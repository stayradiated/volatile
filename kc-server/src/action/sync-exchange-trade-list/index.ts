import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncExchangeTradeList } from '../../model/trade/index.js'

type Input = {
  exchange_uid: string
  user_exchange_keys_uid: string
  force_sync?: boolean
}

type Output = {
  user_uid: string
}

const syncExchangeTradeListHandler: ActionHandlerFn<Input, Output> = async (
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
    force_sync: forceSync
  } = input

  const error = await syncExchangeTradeList(pool, {
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    forceSync,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { syncExchangeTradeListHandler }
