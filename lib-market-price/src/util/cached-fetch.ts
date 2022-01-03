import { errorBoundary } from '@stayradiated/error-boundary'
import { differenceInMilliseconds } from 'date-fns'

type FetchFnResult<ReturnValue> = {
  lastUpdated: Date
  value: ReturnValue
}

type FetchFn<Args, ReturnValue> = (
  fnArgs: Args,
) => Promise<FetchFnResult<ReturnValue> | Error>

type CachedFetchConfig<Args, ReturnValue> = {
  minCacheDurationMs: number
  fetch: FetchFn<Args, ReturnValue>
}

type CachedFetchFn<ReturnValue> = () => Promise<ReturnValue | Error>

type State<T> = {
  promise: Promise<T | Error> | undefined
  ready: boolean
  lastUpdated: Date
  lastValue?: T
}

const createCachedFetchFn = <Args, ReturnValue>(
  config: CachedFetchConfig<Args, ReturnValue>,
  fnArgs: Args,
): CachedFetchFn<ReturnValue> => {
  const { minCacheDurationMs, fetch } = config

  const state: State<ReturnValue> = {
    promise: undefined,
    ready: false,
    lastUpdated: new Date(0),
    lastValue: undefined,
  }

  const cachedFetchFn: CachedFetchFn<ReturnValue> = async () => {
    if (state.promise) {
      return state.promise
    }

    if (state.ready) {
      const timeSinceLastUpdated = differenceInMilliseconds(
        new Date(),
        state.lastUpdated,
      )
      if (timeSinceLastUpdated < minCacheDurationMs) {
        return state.lastValue!
      }
    }

    state.promise = (async (): Promise<ReturnValue | Error> => {
      const result = await errorBoundary(async () => fetch(fnArgs))
      if (result instanceof Error) {
        state.promise = undefined
        return result
      }

      state.promise = undefined
      state.ready = true
      state.lastUpdated = result.lastUpdated
      state.lastValue = result.value
      return result.value
    })()

    return state.promise
  }

  return cachedFetchFn
}

export { CachedFetchConfig, createCachedFetchFn }
