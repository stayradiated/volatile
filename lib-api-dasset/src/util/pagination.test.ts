import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { PaginatedFetchFn, getPage, getAllPages } from './pagination.js'
import type { Config } from './types.js'

const range = (start: number, end: number): number[] => {
  if (end < start) return []

  const length = end - start
  const willReturn = new Array(length)

  for (let i = 0; i < length; i++) {
    willReturn[i] = start + i
  }

  return willReturn
}

const CONFIG: Config = {
  apiKey: 'API_KEY',
  accountId: 'ACCOUNT_ID',
}

const mockPaginate = <T>(list: T[]): PaginatedFetchFn<T> => {
  const total = list.length
  const fn: PaginatedFetchFn<T> = async (options) => {
    const { limit = 25, page = 1 } = options
    const start = (page - 1) * limit
    const end = page * limit
    const results = list.slice(start, end)
    return [
      {
        total,
        results,
      },
    ]
  }

  return fn
}

test('getPage: 0 pages', async (t) => {
  const fetchFn = mockPaginate([])

  const [resultOrError] = await getPage({
    config: CONFIG,
    fetchFn,
    limit: 4,
    page: 1,
  })
  const result = throwIfError(resultOrError)
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

  const [resultOrError] = await getPage({
    config: CONFIG,
    fetchFn,
    limit: 4,
    page: 1,
  })
  const result = throwIfError(resultOrError)
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
    const [resultOrError] = await getPage({
      config: CONFIG,
      fetchFn,
      limit: 4,
      page: 1,
    })
    const result = throwIfError(resultOrError)
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
    const [resultOrError] = await getPage({
      config: CONFIG,
      fetchFn,
      limit: 4,
      page: 2,
    })
    const result = throwIfError(resultOrError)
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

  const [resultOrError] = await getAllPages({ config: CONFIG, fetchFn })
  const result = throwIfError(resultOrError)
  t.deepEqual(range(0, 350), result)
})
