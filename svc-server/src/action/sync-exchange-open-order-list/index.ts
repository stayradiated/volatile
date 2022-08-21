import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncExchangeOpenOrderList } from '../../model/order/index.js'
import {
  getUserExchangeKeys,
  getUserExchangeApiByKeysUid,
} from '../../model/user-exchange-keys/index.js'

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
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const { user_exchange_keys_uid: userExchangeKeysUid } = input

  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUid)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const { exchangeUid } = userExchangeKeys

  const userExchangeApi = await getUserExchangeApiByKeysUid(
    pool,
    userExchangeKeysUid,
  )
  if (userExchangeApi instanceof Error) {
    return userExchangeApi
  }

  const error = await syncExchangeOpenOrderList(pool, {
    userUid,
    exchangeUid,
    userExchangeApi,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { syncExchangeOpenOrderListHandler }
