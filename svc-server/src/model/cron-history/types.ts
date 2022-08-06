type CronHistoryState = 'PENDING' | 'SUCCESS' | 'ERROR'

type CronHistory = {
  UID: string
  createdAt: Date
  updatedAt: Date
  completedAt: Date | undefined
  taskID: string
  input: unknown
  state: CronHistoryState
  output: unknown | undefined
}

export type { CronHistory, CronHistoryState }
