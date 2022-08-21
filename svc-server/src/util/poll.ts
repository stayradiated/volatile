import { setTimeout } from 'node:timers/promises'
import { addMilliseconds, isAfter } from 'date-fns'

type PollFnResult<V> = {
  end: boolean
  value: V | Error
}

type PollOptions<V> = {
  frequencyMs: number
  timeoutMs: number
  fn: (index: number) => Promise<PollFnResult<V>>
}

const poll = async <V>(options: PollOptions<V>): Promise<V | Error> => {
  const { frequencyMs, timeoutMs, fn } = options
  const deadline = addMilliseconds(new Date(), timeoutMs)

  const loop = async (index: number): Promise<V | Error> => {
    if (isAfter(new Date(), deadline)) {
      return new Error('Timed out waiting for poll to finish.')
    }

    const { end, value } = await fn(index)
    if (end) {
      return value
    }

    await setTimeout(frequencyMs)
    return loop(index + 1)
  }

  return loop(1)
}

export { poll }
