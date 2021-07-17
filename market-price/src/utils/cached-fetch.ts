import { DateTime, Duration } from 'luxon'

type FetchFnResult<ReturnValue> = {
  lastUpdated: DateTime
  value: ReturnValue
}

type FetchFn<Args, ReturnValue> = (
  fnArgs: Args,
) => Promise<FetchFnResult<ReturnValue> | Error>

type CachedFetchConfig<Args, ReturnValue> = {
  minCacheDuration: Duration
  fetch: FetchFn<Args, ReturnValue>
}

type CachedFetchFn<ReturnValue> = () => Promise<ReturnValue | Error>

type State<T> = {
  ready: boolean
  lastUpdated: DateTime
  lastValue?: T
}

const createCachedFetchFn = <Args, ReturnValue>(
  config: CachedFetchConfig<Args, ReturnValue>,
  fnArgs: Args,
): CachedFetchFn<ReturnValue> => {
  const { minCacheDuration, fetch } = config

  const state: State<ReturnValue> = {
    ready: false,
    lastUpdated: DateTime.fromSeconds(0),
    lastValue: undefined,
  }

  const cachedFetchFn: CachedFetchFn<ReturnValue> = async () => {
    if (state.ready) {
      const timeSinceLastUpdated = DateTime.local()
        .diff(state.lastUpdated)
        .as('milliseconds')

      if (timeSinceLastUpdated < minCacheDuration.as('milliseconds')) {
        return state.lastValue!
      }
    }

    const result = await fetch(fnArgs)
    if (result instanceof Error) {
      return result
    }

    state.ready = true
    state.lastUpdated = result.lastUpdated
    state.lastValue = result.value
    return result.value
  }

  return cachedFetchFn
}

export { CachedFetchConfig, createCachedFetchFn }
