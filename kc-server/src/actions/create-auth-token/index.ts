import { createAuthToken } from '../../models/auth-token/index.js'
import type { ActionHandlerFn } from '../../utils/action-handler.js'

type Input = {
  email: string
  password: string
}

type Output = {
  user_uid: string
  auth_token: string
}

const createAuthTokenHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input } = context
  const { email, password } = input
  const result = await createAuthToken(pool, { email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.uid,
    auth_token: result.authToken,
  }
}

export { createAuthTokenHandler }
