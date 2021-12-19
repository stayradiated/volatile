import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  selectUserEmailVerifyBySecret,
  deleteUserEmailVerify,
} from '../../model/user-email-verify/index.js'
import { updateUser, getUserEmail } from '../../model/user/index.js'

type Input = {
  email_verify_secret: string
}

type Output = {
  email: string
}

const verifyUserEmailHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input } = context
  const { email_verify_secret: emailVerifySecret } = input

  const userEmailVerify = await selectUserEmailVerifyBySecret(
    pool,
    emailVerifySecret,
  )
  if (userEmailVerify instanceof Error) {
    return userEmailVerify
  }

  const { userUID } = userEmailVerify

  const userError = await updateUser(pool, { userUID, emailVerified: true })
  if (userError instanceof Error) {
    return userError
  }

  const deleteError = await deleteUserEmailVerify(pool, userEmailVerify.UID)
  if (deleteError instanceof Error) {
    return deleteError
  }

  const email = await getUserEmail(pool, userUID)
  if (email instanceof Error) {
    return email
  }

  return {
    email,
  }
}

export { verifyUserEmailHandler }
