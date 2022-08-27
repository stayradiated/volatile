import * as z from 'zod'
import QR from 'qrcode'

import {
  MissingRequiredArgumentError,
  messageWithContext,
  IllegalStateError,
} from '../../util/error.js'
import { authenticator } from '../../util/otplib.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { hasUser2FaByUserUid } from '../../model/user-2fa/index.js'

const schema = {
  input: {},
  output: {
    qrcode: z.string(),
    secret: z.string(),
  },
}
const setupUser2FaHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const alreadyHas2FaEnabled = await hasUser2FaByUserUid(pool, userUid)
    if (alreadyHas2FaEnabled) {
      return new IllegalStateError(
        messageWithContext(`This user already has 2Fa enabled.`, {
          userUid,
          alreadyHas2FaEnabled,
        }),
      )
    }

    const secret = authenticator.generateSecret(20)
    const accountName = userUid
    const issuer = 'volatile.co.nz'
    const keyURI = authenticator.keyuri(accountName, issuer, secret)
    const qrcode = await QR.toDataURL(keyURI)

    return {
      qrcode,
      secret,
    }
  },
}

export { setupUser2FaHandler }
