import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import { DateTime } from 'luxon'

import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import { purgeExpiredUserPasswordReset } from './purge-expired-user-password-reset.js'

import type { UserPasswordResetMasked } from './types.js'

const selectUserPasswordResetBySecret = async (
  pool: Pool,
  secret: string,
): Promise<UserPasswordResetMasked | Error> => {
  const secretHash = hash.sha256(secret)

  const purgeError = await purgeExpiredUserPasswordReset(pool)
  if (purgeError instanceof Error) {
    return purgeError
  }

  const row = await errorBoundary(async () =>
    db
      .selectOne('user_password_reset', {
        secret_hash: secretHash,
        expires_at: db.sql`${db.self} > now()`,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new Error('Invalid password reset secret.')
  }

  return {
    UID: row.uid,
    userUID: row.user_uid,
    expiresAt: DateTime.fromISO(row.expires_at),
  }
}

export { selectUserPasswordResetBySecret }
