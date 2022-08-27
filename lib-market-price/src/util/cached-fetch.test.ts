/* eslint-disable import/no-named-as-default-member */

import { setTimeout } from 'node:timers/promises'
import type { Kanye } from '@volatile/kanye'
import test from 'ava'
import sinon from 'sinon'

import type { CachedFetchConfig, FetchFn } from './cached-fetch.js'
import { createCachedFetchFn } from './cached-fetch.js'

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
  redacted: () => mockRaw,
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

  const [resultA, resultB] = await Promise.all([fetch(), fetch()])
  t.deepEqual(resultA, [1, mockRaw], 'resultA')
  t.deepEqual(resultB, [1, undefined], 'resultB')

  const resultC = await fetch()
  t.deepEqual(resultC, [1, undefined], 'resultC')

  await setTimeout(500)
  t.is(1, fetchSpy.callCount)

  const [resultD, resultE] = await Promise.all([fetch(), fetch()])
  t.deepEqual(resultD, [2, mockRaw], 'resultD')
  t.deepEqual(resultE, [2, undefined], 'resultE')

  const resultF = await fetch()
  t.deepEqual(resultF, [2, undefined], 'resultF')

  await setTimeout(500)
  t.is(2, fetchSpy.callCount)

  const [resultG, resultH] = await Promise.all([fetch(), fetch()])
  t.deepEqual(resultG, [3, mockRaw], 'resultG')
  t.deepEqual(resultH, [3, undefined], 'resultH')

  const resultI = await fetch()
  t.deepEqual(resultI, [3, undefined], 'resultI')

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

  for (let i = 1; i <= 3; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const [value, raw] = await fetch()
    t.true(value instanceof Error)
    t.is(i, fetchSpy.callCount)
    t.is(raw, mockRaw)
  }
})
