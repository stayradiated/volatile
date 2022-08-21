import db, { conditions as dc } from 'zapatos/db'

import type { Pool } from '../../../types.js'

const setLastRunAt = async (pool: Pool): Promise<string[]> => {
  const jobsToUpdate = await db
    .select(
      'dca_order',
      {
        enabled_at: db.sql`${db.self} <= NOW()`,
        next_run_at: db.sql`${db.self} <= NOW()`,
        last_run_at: db.sql`${db.self} IS NULL OR ${
          db.self
        } < ${'next_run_at'}`,
      },
      {
        columns: ['uid'],
      },
    )
    .run(pool)

  const jobUidList = jobsToUpdate.map((job) => job.uid)

  await db
    .update(
      'dca_order',
      {
        last_run_at: new Date(),
        updated_at: new Date(),
      },
      {
        uid: dc.isIn(jobUidList),
      },
    )
    .run(pool)

  return jobUidList
}

export default setLastRunAt
