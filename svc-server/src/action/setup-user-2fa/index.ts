import QR from 'qrcode'

import {
  MissingRequiredArgumentError,
  IllegalStateError,
} from '../../util/error.js'
import { authenticator } from '../../util/otplib.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { hasUser2FAByUserUID } from '../../model/user-2fa/index.js'

type Input = Record<string, unknown>

type Output = {
  qrcode: string
  secret: string
}

const setupUser2FAHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const alreadyHas2FAEnabled = await hasUser2FAByUserUID(pool, userUID)
  if (alreadyHas2FAEnabled) {
    return new IllegalStateError({
      message: 'This user already has 2FA enabled.',
      context: { userUID, alreadyHas2FAEnabled },
    })
  }

  const secret = authenticator.generateSecret(20)
  const accountName = userUID
  const issuer = 'volatile.co.nz'
  const keyURI = authenticator.keyuri(accountName, issuer, secret)
  const qrcode = await QR.toDataURL(keyURI)

  return {
    qrcode,
    secret,
  }
}

export { setupUser2FAHandler }
