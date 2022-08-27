import * as z from 'zod'
import { addMinutes } from 'date-fns'

import type { ActionHandler } from '../../util/action-handler.js'

import { config } from '../../env.js'

import { sendMail } from '../../util/mail.js'
import { UnexpectedError, messageWithContext } from '../../util/error.js'

import { selectUserByEmail } from '../../model/user/index.js'
import {
  generateUserPasswordResetSecret,
  insertUserPasswordReset,
} from '../../model/user-password-reset/index.js'

const schema = {
  input: {
    email: z.string(),
  },
  output: {
    email: z.string(),
  },
}
const sendUserPasswordResetHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
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
      userUid: user.uid,
      expiresAt: addMinutes(new Date(), 30),
      secret,
    })
    if (insertError instanceof Error) {
      return insertError
    }

    const sendMailError = await sendMail({
      to: email,
      subject: 'Volatile Password Reset',
      text: `To reset your account password, visit this URL: ${config.BASE_URL}reset-password/${secret}`,
    })
    if (sendMailError instanceof Error) {
      return new UnexpectedError(
        messageWithContext(`Could not send password reset URL.`, { email }),
        { cause: sendMailError },
      )
    }

    return {
      email,
    }
  },
}

export { sendUserPasswordResetHandler }
