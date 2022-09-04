import type { ErrorResult } from 'remix-domains'

const collapseError = (result: ErrorResult): string => {
  return [
    result.errors.map((error) => error.message),
    result.inputErrors.map(
      (error) => `${error.path.join('.')} ${error.message}`,
    ),
    result.environmentErrors.map((error) => error.message),
  ]
    .flat()
    .join(' • ')
}

export { collapseError }
