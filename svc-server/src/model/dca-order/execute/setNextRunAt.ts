import db from 'zapatos/db'

import type { Pool } from '../../../types.js'

import calculateNextRunAt from './calculateNextRunAt.js'

const setNextRunAt = async (pool: Pool): Promise<void> => {
  const rowsToUpdate = await db
    .select(
      'dca_order',
      {
        enabled_at: db.sql`${db.self} <= NOW()`,
        next_run_at: db.sql`${db.self} IS NULL OR ${
          db.self
        } <= ${'last_run_at'}`,
      },
      {
        columns: ['uid', 'start_at', 'interval_ms'],
      },
    )
    .run(pool)

  for (const row of rowsToUpdate) {
    const nextRunAt = calculateNextRunAt({
      startAt: new Date(row.start_at),
      intervalMs: row.interval_ms,
    })
    await db
      .update(
        'dca_order',
        { next_run_at: nextRunAt, updated_at: new Date() },
        { uid: row.uid },
      )
      .run(pool)
  }
}

export default setNextRunAt
