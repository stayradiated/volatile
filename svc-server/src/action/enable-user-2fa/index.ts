import { errorBoundary } from '@stayradiated/error-boundary'

import {
  MissingRequiredArgumentError,
  IllegalStateError,
  IllegalArgumentError,
} from '../../util/error.js'
import { authenticator } from '../../util/otplib.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  hasUser2FAByUserUid,
  insertUser2FA,
} from '../../model/user-2fa/index.js'

type Input = {
  name: string
  secret: string
  token: string
}

type Output = {
  user_uid: string
}

const enableUser2FAHandler: ActionHandlerFn<Input, Output> = async (
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

  const alreadyHas2FAEnabled = await hasUser2FAByUserUid(pool, userUid)
  if (alreadyHas2FAEnabled) {
    return new IllegalStateError({
      message: 'This user already has 2FA enabled.',
      context: { userUid, alreadyHas2FAEnabled },
    })
  }

  const { name, secret, token } = input

  const isValid = errorBoundary(() => authenticator.verify({ token, secret }))
  if (isValid instanceof Error) {
    return isValid
  }

  if (!isValid) {
    return new IllegalArgumentError({
      message: 'Token is not valid for secret.',
      context: { userUid, token, isValid },
    })
  }

  const error = await insertUser2FA(pool, {
    userUid,
    name,
    secret,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { enableUser2FAHandler }
