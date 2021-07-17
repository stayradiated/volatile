import { ActionHandlerFn } from '../../utils/action-handler.js'
import { createUser } from '../../models/user/index.js'

type Input = {
  email: string
  password: string
}
type Output = {
  user_uid: string
}

const createUserHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, input } = context
  const { email, password } = input
  const result = await createUser(pool, { email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.UID,
  }
}

export { createUserHandler }
