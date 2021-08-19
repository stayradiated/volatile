import { ActionHandlerFn } from '../../util/action-handler.js'
import { updateUser } from '../../model/user/index.js'
import { MissingRequiredArgumentError } from '../../util/error'

type Input = {
  password?: string
  email?: string
}
type Output = {
  user_uid: string
}

const updateUserHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { session, pool, input } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const { email, password } = input

  const error = await updateUser(pool, { userUID, email, password })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { updateUserHandler }
