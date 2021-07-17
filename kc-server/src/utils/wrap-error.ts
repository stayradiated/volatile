const wrapError = (message: string, error: Error): Error =>
  new Error(`${message} ${error.constructor.name}: ${error.message}`)

export { wrapError }
