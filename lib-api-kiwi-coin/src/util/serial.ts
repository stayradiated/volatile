import createLimitFunction, { LimitFunction } from 'p-limit'

const globalStore = new Map<string, LimitFunction>()

const getLimitFn = (userId: string): LimitFunction => {
  if (!globalStore.has(userId)) {
    globalStore.set(userId, createLimitFunction(1))
  }

  return globalStore.get(userId)!
}

const serial = async <ReturnValue>(
  userId: string,
  fn: () => ReturnValue,
): Promise<ReturnValue> => {
  const limitFn = getLimitFn(userId)
  return limitFn(() => {
    return fn()
  })
}

export { serial }
