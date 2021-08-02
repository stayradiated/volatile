import type { APIErrorResponse } from './types.js'

// eslint-disable-next-line fp/no-class
class APIError extends Error {
  response: APIErrorResponse
  constructor(url: string, response: APIErrorResponse) {
    const message = `${url} ${JSON.stringify(response)}`
    super(message)

    // eslint-disable-next-line fp/no-this
    this.response = response
  }
}

export { APIError }
