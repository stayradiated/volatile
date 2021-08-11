import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

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
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new Error('Could not find user by email')
  }

  return {
    UID: row.uid,
    emailVerified: row.email_verified,
  }
}

export { selectUserByEmail }
