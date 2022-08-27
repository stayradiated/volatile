import type { ApiErrorBody } from './types.js'

class ConfigError extends Error {}

class ApiError extends Error {
  apiErrorBody: ApiErrorBody
  constructor(
    message: string,
    options: { cause?: Error; apiErrorBody: ApiErrorBody },
  ) {
    super(message, options)
    this.apiErrorBody = options.apiErrorBody
  }
}

export { ConfigError, ApiError }
