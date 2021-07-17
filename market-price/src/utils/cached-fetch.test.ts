import test from 'ava'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'

import { createCachedFetchFn } from './cached-fetch.js'

test('fetchWithCache', async (t) => {
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
