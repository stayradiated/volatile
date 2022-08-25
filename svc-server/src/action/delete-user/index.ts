import * as z from 'zod'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { deleteUser } from '../../model/user/index.js'

const schema = {
  input: {},
  output: {
    userUid: z.string(),
  },
}
const deleteUserHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
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
      userUid,
    }
  },
}

export { deleteUserHandler }
