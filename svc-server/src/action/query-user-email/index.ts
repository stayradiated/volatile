import * as z from 'zod'
import { IllegalStateError, messageWithContext } from '../../util/error.js'

import { getUserEmail } from '../../model/user/index.js'

import type { ActionHandler } from '../../util/action-handler.js'

const schema = {
  input: {
    userUid: z.string(),
  },
  output: {
    userUid: z.string(),
    email: z.string(),
  },
}
const queryUserEmailHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { role } = session
    if (role !== 'admin') {
      return new IllegalStateError(
        messageWithContext(`Only admin can query user email.`, { role }),
      )
    }

    console.log(input)

    const { userUid } = input

    const email = await getUserEmail(pool, userUid)
    if (email instanceof Error) {
      return email
    }

    return {
      userUid,
      email,
    }
  },
}

export { queryUserEmailHandler }
