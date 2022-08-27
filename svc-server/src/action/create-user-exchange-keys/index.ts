import * as z from 'zod'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { insertUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

const schema = {
  input: {
    exchangeUid: z.string(),
    keys: z.record(z.string()),
    description: z.string(),
  },
  output: {
    userExchangeKeysUid: z.string(),
  },
}

const createUserExchangeKeysHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { exchangeUid, keys, description } = input
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        `userUid is required${JSON.stringify(userUid)}`,
      )
    }

    const result = await insertUserExchangeKeys(pool, {
      userUid,
      exchangeUid,
      keys,
      description,
      invalidatedAt: undefined,
    })
    if (result instanceof Error) {
      return result
    }

    return {
      userExchangeKeysUid: result.uid,
    }
  },
}

export { createUserExchangeKeysHandler }
