import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError } from '../../util/error.js'
import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import type { User } from './types.js'

const selectUserByEmail = async (
  pool: Pool,
  email: string,
): Promise<User | Error> => {
  const emailHash = hash.sha256(email)

  const row = await errorBoundary(async () =>
    db
      .selectOne(
        'user',
        { email_hash: emailHash },
        {
          columns: ['uid', 'email_verified'],
        },
      )
      .run(pool),
  )

  if (!row || row instanceof Error) {
    return new DbError({
      message: 'Could not find user by email',
      cause: row,
      context: { emailHash },
    })
  }

  return {
    uid: row.uid,
    emailVerified: row.email_verified,
  }
}

export { selectUserByEmail }
