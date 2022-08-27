import * as z from 'zod'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'

import { syncExchangeOpenOrderList } from '../../model/order/index.js'
import {
  getUserExchangeKeys,
  getUserExchangeApiByKeysUid,
} from '../../model/user-exchange-keys/index.js'

const schema = {
  input: {
    userExchangeKeysUid: z.string(),
  },
  output: {
    userUid: z.string(),
  },
}
const syncExchangeOpenOrderListHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { input, pool, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const { userExchangeKeysUid } = input

    const userExchangeKeys = await getUserExchangeKeys(
      pool,
      userExchangeKeysUid,
    )
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
      userUid,
    }
  },
}

export { syncExchangeOpenOrderListHandler }
