import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type { Pool } from '../../types.js'

import { keyring } from '../../util/keyring.js'

import { DbError } from '../../util/error.js'
import type { User2Fa } from './types.js'

const selectUser2FaByUserUid = async (
  pool: Pool,
  userUid: string,
): Promise<User2Fa | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('user_2fa', { user_uid: userUid }).run(pool),
  )
  if (row instanceof Error || !row) {
    return new DbError('Could not find user 2Fa.', { cause: row })
  }

  const secret = keyring.decrypt(row.secret_encrypted, row.secret_keyring_id)
  if (secret instanceof Error) {
    return secret
  }

  return {
    uid: row.uid,
    userUid: row.user_uid,
    name: row.name,
    secret,
  }
}

export { selectUser2FaByUserUid }
