import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { User } from './types.js'

const selectUser = async (
  pool: Pool,
  userUid: string,
): Promise<User | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectOne(
        'user',
        { uid: userUid },
        {
          columns: ['uid', 'email_verified'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error || !row) {
    return new DbError({
      message: 'Could not find user.',
      cause: row,
      context: { userUid },
    })
  }

  return {
    uid: row.uid,
    emailVerified: row.email_verified,
  }
}

export { selectUser }
