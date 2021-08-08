import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { log } from '../../util/debug.js'

import type { Pool } from '../../types.js'

const purgeExpiredUserPasswordReset = async (
  pool: Pool,
): Promise<void | Error> => {
  const rows = await errorBoundary(async () =>
    db
      .deletes(
        'user_password_reset',
        {
          expires_at: db.sql`${db.self} <= now()`,
        },
        {
          returning: ['uid'],
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  if (rows.length > 0) {
    log(`Deleted ${rows.length} rows from user_password_reset.`)
  }

  return undefined
}

export { purgeExpiredUserPasswordReset }
