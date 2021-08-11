import { ActionHandlerFn } from '../../util/action-handler.js'
import { insertUser } from '../../model/user/index.js'

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
  const result = await insertUser(pool, { email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.UID,
  }
}

export { createUserHandler }
