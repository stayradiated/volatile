import { ActionHandlerFn } from '../../util/action-handler.js'
import { updateUser } from '../../model/user/index.js'

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
    return new Error('userUID is required')
  }

  const { email, password } = input

  const result = await updateUser(pool, { userUID, email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.UID,
  }
}

export { updateUserHandler }
