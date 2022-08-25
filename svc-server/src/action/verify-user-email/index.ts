import * as z from 'zod'
import type { ActionHandler } from '../../util/action-handler.js'
import {
  selectUserEmailVerifyBySecret,
  deleteUserEmailVerify,
} from '../../model/user-email-verify/index.js'
import { updateUser, getUserEmail } from '../../model/user/index.js'

const schema = {
  input: {
    emailVerifySecret: z.string(),
  },
  output: {
    email: z.string(),
  },
}
const verifyUserEmailHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const { emailVerifySecret } = input

    const userEmailVerify = await selectUserEmailVerifyBySecret(
      pool,
      emailVerifySecret,
    )
    if (userEmailVerify instanceof Error) {
      return userEmailVerify
    }

    const { userUid } = userEmailVerify

    const userError = await updateUser(pool, { userUid, emailVerified: true })
    if (userError instanceof Error) {
      return userError
    }

    const deleteError = await deleteUserEmailVerify(pool, userEmailVerify.uid)
    if (deleteError instanceof Error) {
      return deleteError
    }

    const email = await getUserEmail(pool, userUid)
    if (email instanceof Error) {
      return email
    }

    return {
      email,
    }
  },
}

export { verifyUserEmailHandler }
