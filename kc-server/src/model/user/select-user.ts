import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { User } from './types.js'

const selectUser = async (
  pool: Pool,
  userUID: string,
): Promise<User | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectOne(
        'user',
        { uid: userUID },
        {
          columns: ['uid', 'email_verified'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error || !row) {
    return new DBError({
      message: 'Could not find user.',
      cause: row,
      context: { userUID },
    })
  }

  return {
    UID: row.uid,
    emailVerified: row.email_verified,
  }
}

export { selectUser }
