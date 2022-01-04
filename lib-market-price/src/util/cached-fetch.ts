import { Kanye } from '@volatile/kanye'
import { differenceInMilliseconds } from 'date-fns'

type FetchFnResult<ReturnValue> = {
  lastUpdated: Date
  value: ReturnValue
}

type FetchFn<Args, ReturnValue> = (
  fnArgs: Args,
) => Promise<[FetchFnResult<ReturnValue> | Error, Kanye?]>

type CachedFetchConfig<Args, ReturnValue> = {
  minCacheDurationMs: number
  fetch: FetchFn<Args, ReturnValue>
}

type CachedFetchFn<ReturnValue> = () => Promise<[ReturnValue | Error, Kanye?]>

type State<ReturnValue> = {
  promise: Promise<[ReturnValue | Error, Kanye?]> | undefined
  ready: boolean
  lastUpdated: Date
  lastValue?: ReturnValue
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
      const [result] = await state.promise
      return [result, undefined]
    }

    if (state.ready) {
      const timeSinceLastUpdated = differenceInMilliseconds(
        new Date(),
        state.lastUpdated,
      )
      if (timeSinceLastUpdated < minCacheDurationMs) {
        return [state.lastValue!, undefined]
      }
    }

    state.promise = (async (): Promise<[ReturnValue | Error, Kanye?]> => {
      const [result, kanye] = await fetch(fnArgs)
      if (result instanceof Error) {
        state.promise = undefined
        return [result, kanye]
      }

      state.promise = undefined
      state.ready = true
      state.lastUpdated = result.lastUpdated
      state.lastValue = result.value
      return [result.value, kanye]
    })()

    return state.promise
  }

  return cachedFetchFn
}

export { createCachedFetchFn }
export type { CachedFetchConfig, FetchFn, FetchFnResult }
