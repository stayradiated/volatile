import { errorListBoundary } from '@stayradiated/error-boundary'

import type { Config, PaginationOptions, PaginatedList } from './types.js'

type PaginatedFetchFn<T> = (
  options: PaginationOptions & {
    config: Config
  },
) => Promise<PaginatedList<T> | Error>

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
): Promise<PaginatorState<T> | Error> => {
  const { config, fetchFn, limit, page } = options

  const response = await fetchFn({ config, limit, page })
  if (response instanceof Error) {
    return response
  }

  const { total, results } = response
  const count = page * limit
  return {
    total,
    results,
    hasNext: total > count,
    limit,
    page,
  }
}

type GetAllPagesOptions<T> = {
  config: Config
  fetchFn: PaginatedFetchFn<T>
  limit?: number
}

const getAllPages = async <T>(
  options: GetAllPagesOptions<T>,
): Promise<T[] | Error> => {
  const { config, fetchFn, limit = 100 } = options

  // Find out how many pages there are
  const state = await getPage({ config, fetchFn, limit: 1, page: 1 })
  if (state instanceof Error) {
    return state
  }

  // How many pages do we need to fetch?
  const pageCount = Math.ceil(state.total / limit)
  const pageArray = Array.from({ length: pageCount })
    .fill(undefined)
    .map((_, index) => index + 1)

  // Fetch all the pages
  const list = await errorListBoundary(async () =>
    Promise.all(
      pageArray.map(async (page) => getPage({ config, fetchFn, limit, page })),
    ),
  )
  if (list instanceof Error) {
    return list
  }

  return list.flatMap((item) => item.results)
}

const buildPaginationSearchParameters = (
  options: PaginationOptions,
): Record<string, number> => {
  const searchParameters: Record<string, number> = {}
  if (typeof options.limit === 'number') {
    searchParameters['limit'] = options.limit
  }

  if (typeof options.page === 'number') {
    searchParameters['page'] = options.page
  }

  return searchParameters
}

export {
  PaginatedFetchFn,
  PaginatorState,
  getPage,
  getAllPages,
  buildPaginationSearchParameters as buildPaginationSearchParams,
}
