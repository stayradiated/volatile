import type * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { CronHistory, CronHistoryState } from './types.js'

const validCronHistoryStates = new Set<string>(['PENDING', 'SUCCESS', 'ERROR'])

const isCronHistoryState = (state: string): state is CronHistoryState => {
  return validCronHistoryStates.has(state)
}

const mapRowToCronHistory = (
  row: s.cron_history.JSONSelectable,
): CronHistory | Error => {
  const state = row.state
  if (!isCronHistoryState(state)) {
    return new Error(`cron_history.state is not valid: "${state}"`)
  }

  return {
    uid: row.uid,
    createdAt: parseISO(row.created_at),
    updatedAt: parseISO(row.updated_at),
    completedAt: row.completed_at ? parseISO(row.completed_at) : undefined,
    taskId: row.task_id,
    state,
    input: row.input,
    output: row.output,
  }
}

export { mapRowToCronHistory }
