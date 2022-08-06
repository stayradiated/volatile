import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

import type { CronHistory } from './types.js'

type InsertCronHistoryOptions = Omit<CronHistory, 'UID'>

const insertCronHistory = async (
  pool: Pool,
  options: InsertCronHistoryOptions,
): Promise<CronHistory | Error> => {
  const insert: s.cron_history.Insertable = {
    uid: randomUUID(),
    created_at: options.createdAt,
    updated_at: options.updatedAt,
    completed_at: options.completedAt,
    task_id: options.taskID,
    state: options.state,
    input: JSON.stringify(options.input),
    output: JSON.stringify(options.output),
  }

  const row = await errorBoundary(async () =>
    db
      .insert('cron_history', insert, {
        returning: ['uid'],
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...options,
    UID: row.uid,
  }
}

export { insertCronHistory }
