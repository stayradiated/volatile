import { errorListBoundary } from '@stayradiated/error-boundary'

import type { Config, PaginationOptions, PaginatedList } from './types.js'

type PaginatedFetchFn<T> = (
  config: Config,
  options: PaginationOptions,
) => Promise<PaginatedList<T> | Error>

type PaginatorState<T> = PaginatedList<T> & {
  hasNext: boolean
  limit: number
  page: number
}

const getPage = async <T>(
  config: Config,
  fetchFn: PaginatedFetchFn<T>,
  limit: number,
  page: number,
): Promise<PaginatorState<T> | Error> => {
  const response = await fetchFn(config, { limit, page })
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

const getAllPages = async <T>(
  config: Config,
  fetchFn: PaginatedFetchFn<T>,
): Promise<T[] | Error> => {
  const limit = 100

  // Find out how many pages there are
  const state = await getPage(config, fetchFn, 1, 1)
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
      pageArray.map(async (page) => getPage(config, fetchFn, limit, page)),
    ),
  )
  if (list instanceof Error) {
    return list
  }

  return list.flatMap((item) => item.results)
}

export { PaginatedFetchFn, PaginatorState, getPage, getAllPages }
