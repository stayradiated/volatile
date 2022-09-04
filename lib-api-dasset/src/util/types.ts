import type * as z from 'zod'
import type {
  dassetApiErrorBodySchema,
  paginatedListSchema,
} from './schemas.js'

type Config = {
  apiKey: string
  accountId: string
}

type PaginationOptions = {
  limit?: number
  page?: number
}

type PaginatedList<T> = z.infer<ReturnType<typeof paginatedListSchema>> & {
  results: T[]
}

type DassetApiErrorBody = z.infer<typeof dassetApiErrorBodySchema>

export type { Config, PaginationOptions, PaginatedList, DassetApiErrorBody }
