import * as z from 'zod'
import {
  MissingRequiredArgumentError,
  IllegalStateError,
  UnexpectedError,
} from '../../util/error.js'

import { config } from '../../env.js'

import { sendMail } from '../../util/mail.js'
import type { ActionHandler } from '../../util/action-handler.js'

import {
  generateUserEmailVerifySecret,
  upsertUserEmailVerify,
} from '../../model/user-email-verify/index.js'
import { selectUser, getUserEmail } from '../../model/user/index.js'

const schema = {
  input: {},
  output: {
    userUid: z.string(),
  },
}
const sendUserEmailVerifyHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError({
        message: 'userUid is required.',
        context: { userUid },
      })
    }

    const user = await selectUser(pool, userUid)
    if (user instanceof Error) {
      return user
    }

    if (user.emailVerified) {
      return new IllegalStateError({
        message: 'User has already verified their email address.',
        context: { userUid },
      })
    }

    const email = await getUserEmail(pool, user.uid)
    if (email instanceof Error) {
      return email
    }

    const secret = await generateUserEmailVerifySecret()
    if (secret instanceof Error) {
      return secret
    }

    const insertError = await upsertUserEmailVerify(pool, {
      userUid,
      secret,
    })
    if (insertError instanceof Error) {
      return insertError
    }

    const sendMailError = await sendMail({
      to: email,
      subject: 'Volatile: Email Verification',
      text: `Please open this URL to verify your Volatile account: ${config.BASE_URL}account/verify-email?secret=${secret}`,
    })
    if (sendMailError instanceof Error) {
      return new UnexpectedError({
        message: 'Could not send email verification URL.',
        cause: sendMailError,
        context: { email },
      })
    }

    return {
      userUid,
    }
  },
}

export { sendUserEmailVerifyHandler }
