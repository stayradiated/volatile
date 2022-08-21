import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import { keyring } from '../../util/keyring.js'

import type { Pool } from '../../types.js'

const getUserEmail = async (
  pool: Pool,
  userUid: string,
): Promise<string | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne(
        'user',
        { uid: userUid },
        { columns: ['email_keyring_id', 'email_encrypted'] },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return new DBError({
      message: 'Could not get user email',
      cause: row,
      context: { userUid },
    })
  }

  const email = keyring.decrypt(row.email_encrypted, row.email_keyring_id)
  return email
}

export { getUserEmail }
