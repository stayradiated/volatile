import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { deleteUser } from '../../model/user/index.js'

type Input = Record<string, unknown>

type Output = {
  user_uid: string
}

const deleteUserHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const error = await deleteUser(pool, { userUID })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { deleteUserHandler }
