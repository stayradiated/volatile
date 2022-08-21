import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncExchangeTradeList } from '../../model/trade/index.js'

type Input = {
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
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const { user_exchange_keys_uid: userExchangeKeysUid, force_sync: forceSync } =
    input

  const error = await syncExchangeTradeList(pool, {
    userExchangeKeysUid,
    forceSync,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { syncExchangeTradeListHandler }
