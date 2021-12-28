import { addMinutes } from 'date-fns'

import type { ActionHandlerFn } from '../../util/action-handler.js'

import { BASE_URL } from '../../env.js'

import { sendMail } from '../../util/mail.js'
import { UnexpectedError } from '../../util/error.js'

import { selectUserByEmail } from '../../model/user/index.js'
import {
  generateUserPasswordResetSecret,
  insertUserPasswordReset,
} from '../../model/user-password-reset/index.js'

type Input = {
  email: string
}

type Output = {
  email: string
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

  const insertError = await insertUserPasswordReset(pool, {
    userUID: user.UID,
    expiresAt: addMinutes(new Date(), 30),
    secret,
  })
  if (insertError instanceof Error) {
    return insertError
  }

  const sendMailError = await sendMail({
    to: email,
    subject: 'Volatile Password Reset',
    text: `To reset your account password, visit this URL: ${BASE_URL}reset-password/index.html?secret=${secret}`,
  })
  if (sendMailError instanceof Error) {
    return new UnexpectedError({
      message: 'Could not send password reset URL.',
      cause: sendMailError,
      context: { email },
    })
  }

  return {
    email,
  }
}

export { sendUserPasswordResetHandler }
