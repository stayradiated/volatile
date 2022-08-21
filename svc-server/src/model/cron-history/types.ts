type CronHistoryState = 'PENDING' | 'SUCCESS' | 'ERROR'

type CronHistory = {
  uid: string
  createdAt: Date
  updatedAt: Date
  completedAt: Date | undefined
  taskId: string
  input: unknown
  state: CronHistoryState
  output: unknown
}

export type { CronHistory, CronHistoryState }
