import * as z from 'zod'
import { errorBoundarySync } from '@stayradiated/error-boundary'

import {
  MissingRequiredArgumentError,
  messageWithContext,
  IllegalStateError,
  IllegalArgumentError,
} from '../../util/error.js'
import { authenticator } from '../../util/otplib.js'

import type { ActionHandler } from '../../util/action-handler.js'
import {
  hasUser2FaByUserUid,
  insertUser2Fa,
} from '../../model/user-2fa/index.js'

const schema = {
  input: {
    name: z.string(),
    secret: z.string(),
    token: z.string(),
  },
  output: {
    userUid: z.string(),
  },
}
const enableUser2FaHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userUid } = session
    if (!userUid)
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )

    const alreadyHas2FaEnabled = await hasUser2FaByUserUid(pool, userUid)
    if (alreadyHas2FaEnabled) {
      return new IllegalStateError(
        messageWithContext(`This user already has 2Fa enabled.`, {
          userUid,
          alreadyHas2FaEnabled,
        }),
      )
    }

    const { name, secret, token } = input

    const isValid = errorBoundarySync(() =>
      authenticator.verify({ token, secret }),
    )
    if (isValid instanceof Error) {
      return isValid
    }

    if (!isValid) {
      return new IllegalArgumentError(
        messageWithContext(`Token is not valid for secret.`, {
          userUid,
          token,
          isValid,
        }),
      )
    }

    const error = await insertUser2Fa(pool, {
      userUid,
      name,
      secret,
    })
    if (error instanceof Error) {
      return error
    }

    return {
      userUid,
    }
  },
}

export { enableUser2FaHandler }
