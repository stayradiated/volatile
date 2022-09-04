import type { DassetApiErrorBody } from './types.js'

class ConfigError extends Error {}

class ApiError extends Error {
  apiErrorBody: DassetApiErrorBody
  constructor(apiErrorBody: DassetApiErrorBody, options: { cause?: Error }) {
    const message = `${apiErrorBody.status} ${apiErrorBody.message} [${apiErrorBody.code}:${apiErrorBody.type}]`
    super(message, options)
    this.apiErrorBody = apiErrorBody
  }
}

export { ConfigError, ApiError }
