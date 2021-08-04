import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { keyring } from '../../util/keyring.js'

import type { Pool } from '../../types.js'

const getUserEmail = async (
  pool: Pool,
  userUID: string,
): Promise<string | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne(
        'user',
        { uid: userUID },
        { columns: ['email_keyring_id', 'email_encrypted'] },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  const email = keyring.decrypt(row.email_encrypted, row.email_keyring_id)
  return email
}

export { getUserEmail }
