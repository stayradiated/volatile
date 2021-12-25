import Queue from 'p-queue'

const globalStore = new Map<string, Queue>()

const getQueue = (userId: string): Queue => {
  if (!globalStore.has(userId)) {
    globalStore.set(
      userId,
      new Queue({
        concurrency: 1,
        autoStart: true,
        intervalCap: 1,
        interval: 1000,
      }),
    )
  }

  return globalStore.get(userId)!
}

const serial = async <ReturnValue>(
  userId: string,
  fn: () => ReturnValue,
): Promise<ReturnValue> => {
  const queue = getQueue(userId)
  return queue.add(fn)
}

export { serial }
