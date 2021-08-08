import { errorBoundary } from '@stayradiated/error-boundary'
import * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import type { Pool } from '../../types.js'

const hasUser2FAByUserUID = async (
  pool: Pool,
  userUID: string,
): Promise<boolean | Error> => {
  const rows = await errorBoundary(async () =>
    db.sql<s.user_2fa.SQL, Array<{ exists: boolean }>>`
    SELECT EXISTS(
      SELECT 1
      FROM ${'user_2fa'}
      WHERE ${{ user_uid: userUID }}
    )
  `.run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return false
  }

  return row.exists
}

export { hasUser2FAByUserUID }
