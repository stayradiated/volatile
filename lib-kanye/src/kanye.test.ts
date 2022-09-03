import test from 'ava'

import { kanye } from './kanye.js'
import { mockGlobalDispatcher } from './mock.js'

const mock = mockGlobalDispatcher('https://example.com')

test('should redact url', async (t) => {
  mock.intercept({ path: '/' }).reply(200, { hello: 'world' })

  const raw = await kanye('https://example.com', {
    searchParams: {
      key: 'secret',
    },
    redact: ['secret'],
  })

  t.is(raw.url, 'https://example.com/?key=secret')
  t.is(raw.redacted().url, 'https://example.com/?key=********')
  t.pass()
})
