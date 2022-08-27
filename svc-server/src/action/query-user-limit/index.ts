import * as z from 'zod'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

import { getUserLimit } from '../../model/user-limit/index.js'

import type { ActionHandler } from '../../util/action-handler.js'

const schema = {
  input: {},
  output: {
    userUid: z.string(),
    userLimit: z.record(z.number()),
  },
}
const queryUserLimitHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const userLimit = await getUserLimit(pool, userUid)
    if (userLimit instanceof Error) {
      return userLimit
    }

    return {
      userUid,
      userLimit,
    }
  },
}

export { queryUserLimitHandler }
