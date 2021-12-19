const asError = async <T>(promise: Promise<T | Error>): Promise<Error> => {
  const value = await promise
  if (value instanceof Error) {
    return value
  }

  return new Error('Expected value to be an error!')
}

export { asError }
