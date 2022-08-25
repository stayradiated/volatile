import { formatISO } from 'date-fns'
import * as z from 'zod'

import { createAdminAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandler } from '../../util/action-handler.js'

const schema = {
  input: {
    userUid: z.string(),
  },
  output: {
    userUid: z.string(),
    authToken: z.string(),
    expiresAt: z.string(),
  },
}

const createAdminAuthTokenHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { input } = context
    const { userUid } = input

    const result = await createAdminAuthToken({ userUid })
    if (result instanceof Error) {
      return result
    }

    const { authToken, expiresAt } = result

    return {
      userUid,
      authToken,
      expiresAt: formatISO(expiresAt),
    }
  },
}

export { createAdminAuthTokenHandler }
