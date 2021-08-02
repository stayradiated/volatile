type Config = {
  apiKey: string
  accountId: string
}

type PaginationOptions = {
  limit?: number
  page?: number
}

type PaginatedList<T> = {
  total: number
  results: T[]
}

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

export {
  Config,
  PaginationOptions,
  PaginatedList,
  APIErrorCode,
  APIErrorResponse,
}
