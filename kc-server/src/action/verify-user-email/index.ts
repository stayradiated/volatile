import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  selectUserEmailVerifyBySecret,
  deleteUserEmailVerify,
} from '../../model/user-email-verify/index.js'
import { updateUser } from '../../model/user/index.js'

type Input = {
  email_verify_secret: string
}

type Output = {
  user_uid: string
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

  return {
    user_uid: userUID,
  }
}

export { verifyUserEmailHandler }
