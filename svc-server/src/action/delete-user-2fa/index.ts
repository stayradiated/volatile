import {
  MissingRequiredArgumentError,
  IllegalStateError,
  IllegalArgumentError,
} from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  hasUser2FAByUserUid,
  verifyUser2FAToken,
  deleteUser2FA,
} from '../../model/user-2fa/index.js'

type Input = {
  token: string
}

type Output = {
  user_uid: string
}

const deleteUser2FAHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const has2FAEnabled = await hasUser2FAByUserUid(pool, userUid)
  if (!has2FAEnabled) {
    return new IllegalStateError({
      message: 'This user does not have 2FA enabled.',
      context: { userUid, has2FAEnabled },
    })
  }

  const { token } = input

  const isValidToken = await verifyUser2FAToken(pool, {
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

  const error = await deleteUser2FA(pool, { userUid })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { deleteUser2FAHandler }
