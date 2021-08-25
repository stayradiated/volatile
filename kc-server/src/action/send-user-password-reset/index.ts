import { DateTime } from 'luxon'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { selectUserByEmail } from '../../model/user/index.js'
import {
  generateUserPasswordResetSecret,
  insertUserPasswordReset,
} from '../../model/user-password-reset/index.js'

type Input = {
  email: string
}

type Output = {
  secret: string
}

const sendUserPasswordResetHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input } = context
  const { email } = input

  const user = await selectUserByEmail(pool, email)
  if (user instanceof Error) {
    return user
  }

  const secret = await generateUserPasswordResetSecret()
  if (secret instanceof Error) {
    return secret
  }

  const error = await insertUserPasswordReset(pool, {
    userUID: user.UID,
    expiresAt: DateTime.local().plus({ minutes: 30 }),
    secret,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    secret,
  }
}

export { sendUserPasswordResetHandler }
