enum APIErrorCode {
  ResourceNotFound = 4043,
  PreconditionFailed = 4092,
}

type APIErrorResponse = {
  status: number
  type: string
  code: APIErrorCode
  message: string
}

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

export { APIError, APIErrorCode }
export type { APIErrorResponse }
