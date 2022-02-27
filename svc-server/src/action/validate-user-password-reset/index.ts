import type { ActionHandlerFn } from '../../util/action-handler.js'
import { selectUserPasswordResetBySecret } from '../../model/user-password-reset/index.js'
import { getUserEmail } from '../../model/user/index.js'

type Input = {
  password_reset_secret: string
}

type Output = {
  is_valid: boolean
  email: string | undefined
}

const validateUserPasswordReset: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input } = context
  const { password_reset_secret: passwordResetSecret } = input

  const userPasswordReset = await selectUserPasswordResetBySecret(
    pool,
    passwordResetSecret,
  )
  if (userPasswordReset instanceof Error) {
    return {
      is_valid: false,
      email: undefined,
    }
  }

  const { userUID } = userPasswordReset
  const email = await getUserEmail(pool, userUID)
  if (email instanceof Error) {
    return email
  }

  return {
    is_valid: true,
    email,
  }
}

export { validateUserPasswordReset }
