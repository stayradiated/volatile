import test from 'ava'
import nock from 'nock'

import { kanye } from './kanye.js'

nock.disableNetConnect()

test('should redact url', async (t) => {
  nock('https://example.com').get('/').reply(200, { hello: 'world' })

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
