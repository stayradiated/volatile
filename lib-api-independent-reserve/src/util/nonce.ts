import createLimitFunction, { LimitFunction } from 'p-limit'

const globalStore = new Map<string, LimitFunction>()

const getLimitFn = (apiKey: string): LimitFunction => {
  if (!globalStore.has(apiKey)) {
    globalStore.set(apiKey, createLimitFunction(1))
  }

  return globalStore.get(apiKey)!
}

const withNonce = async <ReturnValue>(
  apiKey: string,
  fn: (nonce: number) => ReturnValue,
): Promise<ReturnValue> => {
  const limitFn = getLimitFn(apiKey)
  return limitFn(() => {
    const nonce = Date.now()
    return fn(nonce)
  })
}

export { withNonce }
