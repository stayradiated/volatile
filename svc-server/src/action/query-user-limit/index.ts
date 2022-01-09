import { MissingRequiredArgumentError } from '../../util/error.js'

import { getUserLimit } from '../../model/user-limit/index.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

type Input = Record<string, never>

type Output = {
  user_uid: string
  user_limit: Record<string, number>
}

const queryUserLimitHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const userLimit = await getUserLimit(pool, userUID)
  if (userLimit instanceof Error) {
    return userLimit
  }

  return {
    user_uid: userUID,
    user_limit: userLimit,
  }
}

export { queryUserLimitHandler }
