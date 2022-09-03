import type { Kanye } from '@volatile/kanye'
import { errorListBoundarySync } from '@stayradiated/error-boundary'

import type { Config, PaginationOptions, PaginatedList } from './types.js'

type PaginatedFetchFn<T> = (
  options: PaginationOptions & {
    config: Config
  },
) => Promise<[PaginatedList<T> | Error, Kanye?]>

type PaginatorState<T> = PaginatedList<T> & {
  hasNext: boolean
  limit: number
  page: number
}

type GetPageOptions<T> = {
  config: Config
  fetchFn: PaginatedFetchFn<T>
  limit: number
  page: number
}

const getPage = async <T>(
  options: GetPageOptions<T>,
): Promise<[PaginatorState<T> | Error, Kanye?]> => {
  const { config, fetchFn, limit, page } = options

  const [response, raw] = await fetchFn({ config, limit, page })
  if (response instanceof Error) {
    return [response, raw]
  }

  const { total, results } = response
  const count = page * limit
  return [
    {
      total,
      results,
      hasNext: total > count,
      limit,
      page,
    },
    raw,
  ]
}

type GetAllPagesOptions<T> = {
  config: Config
  fetchFn: PaginatedFetchFn<T>
  limit?: number
}

const getAllPages = async <T>(
  options: GetAllPagesOptions<T>,
): Promise<[T[] | Error, Kanye[]]> => {
  const { config, fetchFn, limit = 100 } = options

  // Find out how many pages there are
  const [state, raw] = await getPage({ config, fetchFn, limit: 1, page: 1 })
  if (state instanceof Error) {
    return [state, raw ? [raw] : []]
  }

  // How many pages do we need to fetch?
  const pageCount = Math.ceil(state.total / limit)
  const pageArray = Array.from({ length: pageCount })
    .fill(undefined)
    .map((_, index) => index + 1)

  const allPages = await Promise.all(
    pageArray.map(async (page) => getPage<T>({ config, fetchFn, limit, page })),
  )

  const rawList = allPages.map((item) => item[1]).filter(Boolean) as Kanye[]

  // Fetch all the pages
  const list = errorListBoundarySync<PaginatorState<T>>(() =>
    allPages.map((item) => item[0]),
  )
  if (list instanceof Error) {
    return [list, rawList]
  }

  return [list.flatMap((item) => item.results), rawList]
}

const buildPaginationSearchParameters = (
  options: PaginationOptions,
): Record<string, string> => {
  const searchParameters: Record<string, string> = {}
  if (typeof options.limit === 'number') {
    searchParameters['limit'] = String(options.limit)
  }

  if (typeof options.page === 'number') {
    searchParameters['page'] = String(options.page)
  }

  return searchParameters
}

export {
  type PaginatedFetchFn,
  type PaginatorState,
  getPage,
  getAllPages,
  buildPaginationSearchParameters as buildPaginationSearchParams,
}
