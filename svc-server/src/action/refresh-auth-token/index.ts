import * as z from 'zod'
import { formatISO } from 'date-fns'

import {
  MissingRequiredArgumentError,
  messageWithContext,
  IllegalArgumentError,
} from '../../util/error.js'

import { generateAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandler } from '../../util/action-handler.js'

const schema = {
  input: {},
  output: {
    userUid: z.string(),
    authToken: z.string(),
    expiresAt: z.string(),
  },
}

const refreshAuthTokenHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { session } = context
    const { userUid, role } = session

    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    if (role !== 'user' && role !== 'superuser') {
      return new IllegalArgumentError('Cannot refresh tokens for this role.')
    }

    const result = generateAuthToken({ userUid, role })
    if (result instanceof Error) {
      return result
    }

    const { authToken, expiresAt } = result

    return {
      userUid,
      authToken,
      expiresAt: formatISO(expiresAt),
    }
  },
}

export { refreshAuthTokenHandler }
