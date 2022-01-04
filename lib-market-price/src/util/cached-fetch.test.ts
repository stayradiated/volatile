/* eslint-disable import/no-named-as-default-member */

import { setTimeout } from 'timers/promises'
import { Kanye } from '@volatile/kanye'
import test from 'ava'
import sinon from 'sinon'

import {
  createCachedFetchFn,
  CachedFetchConfig,
  FetchFn,
} from './cached-fetch.js'

const mockRaw: Kanye = {
  error: undefined,
  method: 'GET',
  url: 'https://my.url',
  requestAt: new Date(),
  requestHeaders: undefined,
  requestBody: undefined,
  responseAt: undefined,
  responseStatus: 200,
  responseHeaders: undefined,
  responseBodyAt: undefined,
  responseBody: undefined,
}

test('should return value', async (t) => {
  const source: CachedFetchConfig<Record<string, unknown>, number> = {
    minCacheDurationMs: 1000,
    fetch: async () => [
      {
        value: 0,
        lastUpdated: new Date(),
      },
      mockRaw,
    ],
  }

  const fetch = createCachedFetchFn(source, {})

  const [value, raw] = await fetch()
  t.is(value, 0)
  t.is(raw, mockRaw)
})

test('should only call fetch when needed', async (t) => {
  let iterator = 0

  const fetchSpy = sinon.spy<FetchFn<Record<string, unknown>, number>>(
    async () => {
      return [
        {
          value: ++iterator,
          lastUpdated: new Date(),
        },
        mockRaw,
      ]
    },
  )

  const source: CachedFetchConfig<Record<string, unknown>, number> = {
    minCacheDurationMs: 500,
    fetch: fetchSpy,
  }

  const fetch = createCachedFetchFn(source, {})

  const [a, b] = await Promise.all([fetch(), fetch()])
  t.deepEqual(a, [1, mockRaw], 'a')
  t.deepEqual(b, [1, undefined], 'b')

  const c = await fetch()
  t.deepEqual(c, [1, undefined], 'c')

  await setTimeout(500)
  t.is(1, fetchSpy.callCount)

  const [d, e] = await Promise.all([fetch(), fetch()])
  t.deepEqual(d, [2, mockRaw], 'd')
  t.deepEqual(e, [2, undefined], 'e')

  const f = await fetch()
  t.deepEqual(f, [2, undefined], 'f')

  await setTimeout(500)
  t.is(2, fetchSpy.callCount)

  const [g, h] = await Promise.all([fetch(), fetch()])
  t.deepEqual(g, [3, mockRaw], 'g')
  t.deepEqual(h, [3, undefined], 'h')

  const i = await fetch()
  t.deepEqual(i, [3, undefined], 'i')

  await setTimeout(500)
  t.is(3, fetchSpy.callCount)
})

test('should not cache errors', async (t) => {
  const fetchSpy = sinon.spy<FetchFn<Record<string, unknown>, number>>(
    async () => [new Error('fail'), mockRaw],
  )

  const source: CachedFetchConfig<Record<string, unknown>, number> = {
    minCacheDurationMs: 500,
    fetch: fetchSpy,
  }

  const fetch = createCachedFetchFn(source, {})

  {
    const [value, raw] = await fetch()
    t.true(value instanceof Error)
    t.is(1, fetchSpy.callCount)
    t.is(raw, mockRaw)
  }

  {
    const [value, raw] = await fetch()
    t.true(value instanceof Error)
    t.is(2, fetchSpy.callCount)
    t.is(raw, mockRaw)
  }

  {
    const [value, raw] = await fetch()
    t.true(value instanceof Error)
    t.is(3, fetchSpy.callCount)
    t.is(raw, mockRaw)
  }
})
