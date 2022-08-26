import * as z from 'zod'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'

import { syncExchangeTradeList } from '../../model/trade/index.js'

const schema = {
  input: {
    userExchangeKeysUid: z.string(),
    forceSync: z.optional(z.boolean()),
  },
  output: {
    userUid: z.string(),
  },
}
const syncExchangeTradeListHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { input, pool, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError({
        message: 'userUid is required',
        context: { userUid },
      })
    }

    const { userExchangeKeysUid, forceSync } = input

    const error = await syncExchangeTradeList(pool, {
      userExchangeKeysUid,
      forceSync,
    })
    if (error instanceof Error) {
      return error
    }

    return {
      userUid,
    }
  },
}

export { syncExchangeTradeListHandler }
