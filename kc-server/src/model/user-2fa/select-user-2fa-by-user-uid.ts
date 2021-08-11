import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type { Pool } from '../../types.js'

import { keyring } from '../../util/keyring.js'

import { explainError } from '../../util/error.js'
import type { User2FA } from './types.js'

const selectUser2FAByUserUID = async (
  pool: Pool,
  userUID: string,
): Promise<User2FA | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('user_2fa', { user_uid: userUID }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return explainError('Could not find user 2FA.', { userUID })
  }

  const secret = keyring.decrypt(row.secret_encrypted, row.secret_keyring_id)
  if (secret instanceof Error) {
    return secret
  }

  return {
    UID: row.uid,
    userUID: row.user_uid,
    name: row.name,
    secret,
  }
}

export { selectUser2FAByUserUID }
