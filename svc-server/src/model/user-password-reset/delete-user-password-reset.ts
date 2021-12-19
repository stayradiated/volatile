import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import { purgeExpiredUserPasswordReset } from './purge-expired-user-password-reset.js'

const deleteUserPasswordReset = async (
  pool: Pool,
  userPasswordResetUID: string,
): Promise<true | Error> => {
  const purgeError = await purgeExpiredUserPasswordReset(pool)
  if (purgeError instanceof Error) {
    return purgeError
  }

  const error = await errorBoundary(async () =>
    db
      .deletes('user_password_reset', {
        uid: userPasswordResetUID,
      })
      .run(pool),
  )
  if (error instanceof Error) {
    return new DBError({
      message: 'Could not delete User Password Reset',
      cause: error,
      context: { userPasswordResetUID },
    })
  }

  return true
}

export { deleteUserPasswordReset }
