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

export { Config, PaginationOptions, PaginatedList }
