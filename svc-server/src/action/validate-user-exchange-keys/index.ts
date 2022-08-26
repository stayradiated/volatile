import * as z from 'zod'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { validateUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

const schema = {
  input: {
    userExchangeKeysUid: z.string(),
  },
  output: {
    isValid: z.boolean(),
    validationMessage: z.optional(z.string()),
    userExchangeKeysUid: z.string(),
  },
}
const validateUserExchangeKeysHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userExchangeKeysUid } = input
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError({
        message: 'userUid is required',
        context: { userUid },
      })
    }

    const result = await validateUserExchangeKeys(pool, userExchangeKeysUid)
    if (result instanceof Error) {
      return result
    }

    return {
      isValid: result.isValid,
      validationMessage: result.validationMessage,
      userExchangeKeysUid: result.userExchangeKeysUid,
    }
  },
}

export { validateUserExchangeKeysHandler }
