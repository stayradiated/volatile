import { errorBoundarySync } from '@stayradiated/error-boundary'

import { authenticator } from '../../util/otplib.js'

import type { Pool } from '../../types.js'
import { selectUser2FaByUserUid } from './select-user-2fa-by-user-uid.js'

type VerifyUser2FaTokenOptions = {
  userUid: string
  token: string
}

const verifyUser2FaToken = async (
  pool: Pool,
  options: VerifyUser2FaTokenOptions,
): Promise<boolean | Error> => {
  const { userUid, token } = options

  const user2Fa = await selectUser2FaByUserUid(pool, userUid)
  if (user2Fa instanceof Error) {
    return user2Fa
  }

  const isValid = errorBoundarySync(() =>
    authenticator.verify({ token, secret: user2Fa.secret }),
  )

  return isValid
}

export { verifyUser2FaToken, VerifyUser2FaTokenOptions }
