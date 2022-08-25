import * as z from 'zod'
import { ActionHandler } from '../../util/action-handler.js'
import { insertUser } from '../../model/user/index.js'

const schema = {
  input: {
    email: z.string(),
    password: z.string(),
  },
  output: {
    userUid: z.string(),
  },
}
const createUserHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const { email: rawEmail, password } = input

    const email = rawEmail.trim().toLowerCase()

    const result = await insertUser(pool, { email, password })
    if (result instanceof Error) {
      return result
    }

    return {
      userUid: result.uid,
    }
  },
}

export { createUserHandler }
