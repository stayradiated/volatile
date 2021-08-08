import { authenticator } from 'otplib'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { selectUser2FAByUserUID } from './select-user-2fa-by-user-uid.js'

type VerifyUser2FATokenOptions = {
  userUID: string
  token: string
}

const verifyUser2FAToken = async (
  pool: Pool,
  options: VerifyUser2FATokenOptions,
): Promise<boolean | Error> => {
  const { userUID, token } = options

  const user2FA = await selectUser2FAByUserUID(pool, userUID)
  if (user2FA instanceof Error) {
    return user2FA
  }

  const isValid = errorBoundary(() =>
    authenticator.verify({ token, secret: user2FA.secret }),
  )

  return isValid
}

export { verifyUser2FAToken, VerifyUser2FATokenOptions }
