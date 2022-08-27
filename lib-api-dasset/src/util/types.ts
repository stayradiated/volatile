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

type DassetApiError = {
  status: number
  type: string
  code: number
  message: string
}

export type { Config, PaginationOptions, PaginatedList, DassetApiError }
