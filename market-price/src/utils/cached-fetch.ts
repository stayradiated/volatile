import { DateTime, Duration } from 'luxon'
import debug, { Debugger } from 'debug'

type FetchFnResult<ReturnValue> = {
  lastUpdated: DateTime
  value: ReturnValue
}

type FetchFn<Args, ReturnValue> = (
  fnArgs: Args,
) => Promise<FetchFnResult<ReturnValue>>

type CachedFetchConfig<Args, ReturnValue> = {
  log: Debugger
  minCacheDuration: Duration
  fetch: FetchFn<Args, ReturnValue>
}

type CachedFetchFn<ReturnValue> = () => Promise<ReturnValue>

const createCachedFetchFn = <Args, ReturnValue>(
  config: CachedFetchConfig<Args, ReturnValue>,
  fnArgs: Args,
): CachedFetchFn<ReturnValue> => {
  const { log, minCacheDuration, fetch } = config

  const logError = log.extend('error')
  debug.enable(logError.namespace)

  let lastUpdated = DateTime.fromSeconds(0)
  let lastValue: ReturnValue

  const cachedFetchFn: CachedFetchFn<ReturnValue> = async () => {
    const timeSinceLastUpdated = DateTime.local()
      .diff(lastUpdated)
      .as('milliseconds')
    if (timeSinceLastUpdated < minCacheDuration.as('milliseconds')) {
      return lastValue
    }

    try {
      const result = await fetch(fnArgs)
      lastUpdated = result.lastUpdated
      lastValue = result.value
      return result.value
    } catch (error: unknown) {
      if (error instanceof Error) {
        logError(error.message)
      } else {
        logError(`unknown error occurred.`)
      }

      return lastValue
    }
  }

  return cachedFetchFn
}

export { CachedFetchConfig, createCachedFetchFn }
