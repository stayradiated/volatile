import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { deleteUser } from '../../model/user/index.js'

type Input = Record<string, never>

type Output = {
  user_uid: string
}

const deleteUserHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, session } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const error = await deleteUser(pool, { userUid })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUid,
  }
}

export { deleteUserHandler }
