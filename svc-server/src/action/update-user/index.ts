import { ActionHandlerFn } from '../../util/action-handler.js'
import { updateUser } from '../../model/user/index.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

type Input = {
  password?: string
  email?: string
}
type Output = {
  user_uid: string
}

const updateUserHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { session, pool, input } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const { email: rawEmail, password } = input

  const email =
    typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : undefined

  const error = await updateUser(pool, { userUid, email, password })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { updateUserHandler }
