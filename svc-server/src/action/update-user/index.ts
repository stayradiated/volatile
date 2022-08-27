import * as z from 'zod'
import type { ActionHandler } from '../../util/action-handler.js'
import { updateUser } from '../../model/user/index.js'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

const schema = {
  input: {
    password: z.optional(z.string()),
    email: z.optional(z.string()),
  },
  output: {
    userUid: z.string(),
  },
}
const updateUserHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { session, pool, input } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const { email: rawEmail, password } = input

    const email =
      typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : undefined

    const error = await updateUser(pool, { userUid, email, password })
    if (error instanceof Error) {
      return error
    }

    return {
      userUid,
    }
  },
}

export { updateUserHandler }
