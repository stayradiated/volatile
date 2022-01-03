/* eslint-disable import/no-named-as-default-member */

import { setTimeout } from 'timers/promises'
import test from 'ava'
import debug from 'debug'
import sinon from 'sinon'

import { createCachedFetchFn } from './cached-fetch.js'

test('should return value', async (t) => {
  const source = {
    log: debug('test'),
    minCacheDurationMs: 1000,
    fetch: async () => ({
      value: 0,
      lastUpdated: new Date(),
    }),
  }

  const fetch = createCachedFetchFn(source, {})

  const value = await fetch()
  t.is(value, 0)
})

test('should only call fetch when needed', async (t) => {
  const source = {
    log: debug('test'),
    minCacheDurationMs: 500,
    fetch: sinon.spy(async () => ({
      value: Math.random(),
      lastUpdated: new Date(),
    })),
  }

  const fetch = createCachedFetchFn(source, {})

  await Promise.all([fetch(), fetch()])
  await fetch()
  await setTimeout(500)
  t.is(1, source.fetch.callCount)

  await Promise.all([fetch(), fetch()])
  await fetch()
  await setTimeout(500)
  t.is(2, source.fetch.callCount)

  await Promise.all([fetch(), fetch()])
  await fetch()
  await setTimeout(500)
  t.is(3, source.fetch.callCount)
})

test('should not cache errors', async (t) => {
  const source = {
    log: debug('test'),
    minCacheDurationMs: 500,
    fetch: sinon.spy(async () => new Error('fail')),
  }

  const fetch = createCachedFetchFn(source, {})

  {
    const value = await fetch()
    t.true(value instanceof Error)
    t.is(1, source.fetch.callCount)
  }

  {
    const value = await fetch()
    t.true(value instanceof Error)
    t.is(2, source.fetch.callCount)
  }

  {
    const value = await fetch()
    t.true(value instanceof Error)
    t.is(3, source.fetch.callCount)
  }
})
