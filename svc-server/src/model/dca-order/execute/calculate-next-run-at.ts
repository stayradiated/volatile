import { addMilliseconds, differenceInMilliseconds } from 'date-fns'

type Options = {
  startAt: Date
  intervalMs: number
}

const calculateNextRunAt = (options: Options) => {
  const { startAt, intervalMs } = options

  const now = new Date()
  const millisecondsSinceStart = differenceInMilliseconds(now, startAt)
  const numberIntervalsSinceStart = Math.floor(
    millisecondsSinceStart / intervalMs,
  )
  const numberNextInterval = numberIntervalsSinceStart + 1
  const millisecondsUntilNextRun = numberNextInterval * intervalMs
  const nextRunAt = addMilliseconds(startAt, millisecondsUntilNextRun)

  return nextRunAt
}

export default calculateNextRunAt
