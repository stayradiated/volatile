import type * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { CronHistory, CronHistoryState } from './types.js'

const validCronHistoryStates: CronHistoryState[] = [
  'PENDING',
  'SUCCESS',
  'ERROR',
]

const isCronHistoryState = (state: string): state is CronHistoryState => {
  return validCronHistoryStates.includes(state as CronHistoryState)
}

const mapRowToCronHistory = (
  row: s.cron_history.JSONSelectable,
): CronHistory | Error => {
  const state = row.state
  if (!isCronHistoryState(state)) {
    return new Error(`cron_history.state is not valid: "${state}"`)
  }

  return {
    UID: row.uid,
    createdAt: parseISO(row.created_at),
    updatedAt: parseISO(row.updated_at),
    completedAt: row.completed_at ? parseISO(row.completed_at) : undefined,
    taskID: row.task_id,
    state,
    input: row.input,
    output: row.output,
  }
}

export { mapRowToCronHistory }
