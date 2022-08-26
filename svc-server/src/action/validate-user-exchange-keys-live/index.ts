import * as z from 'zod'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { getUserExchangeApi } from '../../exchange-api/index.js'
import { getExchange } from '../../model/exchange/index.js'

const schema = {
  input: {
    exchangeUid: z.string(),
    keys: z.record(z.string()),
  },
  output: {
    isValid: z.boolean(),
    validationMessage: z.optional(z.string()),
  },
}
const validateUserExchangeKeysLiveHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { exchangeUid, keys } = input
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
        isValid: false,
        validation_message: balance.message,
      }
    }

    return {
      isValid: true,
      validation_message: undefined,
    }
  },
}

export { validateUserExchangeKeysLiveHandler }
