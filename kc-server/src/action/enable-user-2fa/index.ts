import { authenticator } from 'otplib'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  hasUser2FAByUserUID,
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
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const alreadyHas2FAEnabled = await hasUser2FAByUserUID(pool, userUID)
  if (alreadyHas2FAEnabled) {
    return new Error('This user already has 2FA enabled.')
  }

  const { name, secret, token } = input

  const isValid = errorBoundary(() => authenticator.verify({ token, secret }))
  if (isValid instanceof Error) {
    return isValid
  }

  if (!isValid) {
    return new Error('Token is not valid for secret.')
  }

  const error = await insertUser2FA(pool, {
    userUID,
    name,
    secret,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { enableUser2FAHandler }
