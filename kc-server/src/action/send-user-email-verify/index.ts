import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  generateUserEmailVerifySecret,
  upsertUserEmailVerify,
} from '../../model/user-email-verify/index.js'
import { selectUser } from '../../model/user/index.js'

type Input = Record<string, unknown>

type Output = {
  user_uid: string
  secret: string
}

const sendUserEmailVerifyHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required.')
  }

  const user = await selectUser(pool, userUID)
  if (user instanceof Error) {
    return user
  }

  if (user.emailVerified) {
    return new Error('User has already verified their email address.')
  }

  const secret = await generateUserEmailVerifySecret()
  if (secret instanceof Error) {
    return secret
  }

  const insertError = await upsertUserEmailVerify(pool, {
    userUID,
    secret,
  })
  if (insertError instanceof Error) {
    return insertError
  }

  return {
    user_uid: userUID,
    secret,
  }
}

export { sendUserEmailVerifyHandler }
