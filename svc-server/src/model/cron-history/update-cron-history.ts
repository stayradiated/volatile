import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError, messageWithContext } from '../../util/error.js'
import type { Pool } from '../../types.js'

import { mapRowToCronHistory } from './map-row-to-cron-history.js'
import type { CronHistory } from './types.js'

type UpdateCronHistoryOptions = Pick<
  CronHistory,
  'uid' | 'completedAt' | 'state' | 'output'
>

const updateCronHistory = async (
  pool: Pool,
  options: UpdateCronHistoryOptions,
): Promise<CronHistory | Error> => {
  const rows = await errorBoundary(async () =>
    db
      .update(
        'cron_history',
        {
          updated_at: new Date(),
          completed_at: options.completedAt,
          state: options.state,
          output: JSON.stringify(options.output),
        },
        {
          uid: options.uid,
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return new DbError('Could not update Dca Order.', { cause: rows })
  }

  const row = rows[0]
  if (!row) {
    return new DbError(
      messageWithContext(`Could not update Dca Order.`, { ...options }),
    )
  }

  return mapRowToCronHistory(row)
}

export { updateCronHistory }
