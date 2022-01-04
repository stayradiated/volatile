import {
  MissingRequiredArgumentError,
  IllegalStateError,
  IllegalArgumentError,
} from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  hasUser2FAByUserUID,
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
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const has2FAEnabled = await hasUser2FAByUserUID(pool, userUID)
  if (!has2FAEnabled) {
    return new IllegalStateError({
      message: 'This user does not have 2FA enabled.',
      context: { userUID, has2FAEnabled },
    })
  }

  const { token } = input

  const isValidToken = await verifyUser2FAToken(pool, {
    userUID,
    token,
  })
  if (isValidToken instanceof Error) {
    return isValidToken
  }

  if (!isValidToken) {
    return new IllegalArgumentError({
      message: 'Token is not valid for secret.',
      context: { userUID, token, isValidToken },
    })
  }

  const error = await deleteUser2FA(pool, { userUID })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { deleteUser2FAHandler }
