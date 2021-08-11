import { setTimeout } from 'timers/promises'
import test from 'ava'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import sinon from 'sinon'

import { createCachedFetchFn } from './cached-fetch.js'

test('createCachedFetchFn: should return value', async (t) => {
  const source = {
    log: debug('test'),
    minCacheDuration: Duration.fromISOTime('00:00:01'),
    fetch: async () => ({
      value: 0,
      lastUpdated: DateTime.local(),
    }),
  }

  const fetch = createCachedFetchFn(source, {})

  const value = await fetch()
  t.is(value, 0)
})

test('createCachedFetchFn: should only call fetch when needed', async (t) => {
  const source = {
    log: debug('test'),
    minCacheDuration: Duration.fromISOTime('00:00:00.500'),
    fetch: sinon.spy(async () => ({
      value: Math.random(),
      lastUpdated: DateTime.local(),
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
