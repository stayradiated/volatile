import * as z from 'zod'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { updateUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

const schema = {
  input: {
    userExchangeKeysUid: z.string(),
    keys: z.optional(z.record(z.string())),
    description: z.optional(z.string()),
  },
  output: {
    userExchangeKeysUid: z.string(),
  },
}
const updateUserExchangeKeysHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userExchangeKeysUid, keys, description } = input
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const error = await updateUserExchangeKeys(pool, {
      uid: userExchangeKeysUid,
      userUid,
      keys,
      description,
      invalidatedAt: undefined,
    })
    if (error instanceof Error) {
      return error
    }

    return {
      userExchangeKeysUid,
    }
  },
}

export { updateUserExchangeKeysHandler }
