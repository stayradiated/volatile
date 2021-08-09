import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

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
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new Error('Invalid email verify secret.')
  }

  return {
    UID: row.uid,
    userUID: row.user_uid,
  }
}

export { selectUserEmailVerifyBySecret }
