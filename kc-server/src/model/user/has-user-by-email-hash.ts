import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

const hasUserByEmailHash = async (
  pool: Pool,
  emailHash: string,
): Promise<boolean | Error> => {
  const rows = await errorBoundary(async () =>
    db.sql<s.user.SQL, Array<{ exists: boolean }>>`
    SELECT EXISTS(
      SELECT 1 FROM ${'user'} WHERE ${{ email_hash: emailHash }}
    )
  `.run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  return Boolean(rows[0]?.exists)
}

export { hasUserByEmailHash }
