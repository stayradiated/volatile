import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { AuthError } from '../../util/error.js'
import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'

import type { UserEmailVerifyMasked } from './types.js'

const selectUserEmailVerifyBySecret = async (
  pool: Pool,
  secret: string,
): Promise<UserEmailVerifyMasked | Error> => {
  const secretHash = hash.sha256(secret)

  const row = await errorBoundary(async () =>
    db
      .selectOne('user_email_verify', {
        secret_hash: secretHash,
      })
      .run(pool),
  )
  if (!row || row instanceof Error) {
    return new AuthError({
      message: 'Invalid email verify secret.',
      cause: row,
      context: { secretHash },
    })
  }

  return {
    uid: row.uid,
    userUid: row.user_uid,
  }
}

export { selectUserEmailVerifyBySecret }
