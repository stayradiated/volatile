import test from 'ava'
import { range } from 'rambda'

import { PaginatedFetchFn, getPage, getAllPages } from './pagination.js'
import type { Config } from './types.js'

const CONFIG: Config = {
  apiKey: 'API_KEY',
  accountId: 'ACCOUNT_ID',
}

const mockPaginate = <T>(list: T[]): PaginatedFetchFn<T> => {
  const total = list.length
  const fn: PaginatedFetchFn<T> = async (_config, options) => {
    const { limit = 25, page = 1 } = options
    const start = (page - 1) * limit
    const end = page * limit
    const results = list.slice(start, end)
    return {
      total,
      results,
    }
  }

  return fn
}

test('getPage: 0 pages', async (t) => {
  const fetchFn = mockPaginate([])

  const result = await getPage(CONFIG, fetchFn, 4, 1)
  t.deepEqual(
    {
      total: 0,
      results: [],
      hasNext: false,
      limit: 4,
      page: 1,
    },
    result,
  )
})

test('getPage: 1 page', async (t) => {
  const fetchFn = mockPaginate(range(0, 4))

  const result = await getPage(CONFIG, fetchFn, 4, 1)
  t.deepEqual(
    {
      total: 4,
      results: range(0, 4),
      hasNext: false,
      limit: 4,
      page: 1,
    },
    result,
  )
})

test('getPage: 2 pages', async (t) => {
  const fetchFn = mockPaginate(range(0, 8))
  {
    const result = await getPage(CONFIG, fetchFn, 4, 1)
    t.deepEqual(
      {
        total: 8,
        results: range(0, 4),
        hasNext: true,
        limit: 4,
        page: 1,
      },
      result,
    )
  }

  {
    const result = await getPage(CONFIG, fetchFn, 4, 2)
    t.deepEqual(
      {
        total: 8,
        results: range(4, 8),
        hasNext: false,
        limit: 4,
        page: 2,
      },
      result,
    )
  }
})

test('getAllPages', async (t) => {
  const fetchFn = mockPaginate(range(0, 350))

  const results = await getAllPages(CONFIG, fetchFn)
  t.deepEqual(range(0, 350), results)
})
