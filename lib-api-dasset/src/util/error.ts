import type { DassetApiError } from './types.js'

class ConfigError extends Error {}

class ApiError extends Error {
  apiErrorBody: DassetApiError
  constructor(
    message: string,
    options: { cause?: Error; apiErrorBody: DassetApiError },
  ) {
    super(message, options)
    this.apiErrorBody = options.apiErrorBody
  }
}

export { ConfigError, ApiError }
