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
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const userLimit = await getUserLimit(pool, userUid)
  if (userLimit instanceof Error) {
    return userLimit
  }

  return {
    user_uid: userUid,
    user_limit: userLimit,
  }
}

export { queryUserLimitHandler }
