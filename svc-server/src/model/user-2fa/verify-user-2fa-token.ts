import { errorBoundary } from '@stayradiated/error-boundary'

import { authenticator } from '../../util/otplib.js'

import type { Pool } from '../../types.js'
import { selectUser2FAByUserUid } from './select-user-2fa-by-user-uid.js'

type VerifyUser2FATokenOptions = {
  userUid: string
  token: string
}

const verifyUser2FAToken = async (
  pool: Pool,
  options: VerifyUser2FATokenOptions,
): Promise<boolean | Error> => {
  const { userUid, token } = options

  const user2FA = await selectUser2FAByUserUid(pool, userUid)
  if (user2FA instanceof Error) {
    return user2FA
  }

  const isValid = errorBoundary(() =>
    authenticator.verify({ token, secret: user2FA.secret }),
  )

  return isValid
}

export { verifyUser2FAToken, VerifyUser2FATokenOptions }
