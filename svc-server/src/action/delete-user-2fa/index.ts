import * as z from 'zod'
import {
  MissingRequiredArgumentError,
  IllegalStateError,
  IllegalArgumentError,
} from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import {
  hasUser2FaByUserUid,
  verifyUser2FaToken,
  deleteUser2Fa,
} from '../../model/user-2fa/index.js'

const schema = {
  input: {
    token: z.string(),
  },
  output: {
    userUid: z.string(),
  },
}
const deleteUser2FaHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError({
        message: 'userUid is required',
        context: { userUid },
      })
    }

    const has2FaEnabled = await hasUser2FaByUserUid(pool, userUid)
    if (!has2FaEnabled) {
      return new IllegalStateError({
        message: 'This user does not have 2Fa enabled.',
        context: { userUid, has2FaEnabled },
      })
    }

    const { token } = input

    const isValidToken = await verifyUser2FaToken(pool, {
      userUid,
      token,
    })
    if (isValidToken instanceof Error) {
      return isValidToken
    }

    if (!isValidToken) {
      return new IllegalArgumentError({
        message: 'Token is not valid for secret.',
        context: { userUid, token, isValidToken },
      })
    }

    const error = await deleteUser2Fa(pool, { userUid })
    if (error instanceof Error) {
      return error
    }

    return {
      userUid,
    }
  },
}

export { deleteUser2FaHandler }
