import * as z from 'zod'
import type { ActionHandler } from '../../util/action-handler.js'
import { selectUserPasswordResetBySecret } from '../../model/user-password-reset/index.js'
import { getUserEmail } from '../../model/user/index.js'

const schema = {
  input: {
    passwordResetSecret: z.string(),
  },
  output: {
    isValid: z.boolean(),
    email: z.optional(z.string()),
  },
}
const validateUserPasswordReset: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const { passwordResetSecret } = input

    const userPasswordReset = await selectUserPasswordResetBySecret(
      pool,
      passwordResetSecret,
    )
    if (userPasswordReset instanceof Error) {
      return {
        isValid: false,
        email: undefined,
      }
    }

    const { userUid } = userPasswordReset
    const email = await getUserEmail(pool, userUid)
    if (email instanceof Error) {
      return email
    }

    return {
      isValid: true,
      email,
    }
  },
}

export { validateUserPasswordReset }
