const formatContext = (context: Record<string, string>): string =>
  Object.entries(context)
    .map(([key, value]) => `${key}='${value}'`)
    .join(', ')

const explainError = (
  message: string,
  context?: Record<string, string>,
  error?: Error,
): Error => {
  const originalErrorMessage = error
    ? `${error.constructor.name}: ${error.message}`
    : ''

  const contextString = context ? formatContext(context) : ''

  const output = [message, contextString, originalErrorMessage]
    .filter(Boolean)
    .join(' | ')

  return new Error(output)
}

export { explainError }
