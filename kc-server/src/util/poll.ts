import { setTimeout } from 'timers/promises'
import { Duration, DateTime } from 'luxon'

type PollFnResult<V> = {
  end: boolean
  value: V | Error
}

type PollOptions<V> = {
  frequency: Duration
  timeout: Duration
  fn: (index: number) => Promise<PollFnResult<V>>
}

const poll = async <V>(options: PollOptions<V>): Promise<V | Error> => {
  const { frequency, timeout, fn } = options
  const deadline = DateTime.local().plus(timeout)
  const frequencyMs = frequency.valueOf()

  const loop = async (index: number): Promise<V | Error> => {
    if (deadline.diffNow().valueOf() <= 0) {
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
