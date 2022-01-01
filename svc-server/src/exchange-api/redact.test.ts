import test from 'ava'

import { redactString, redactObject } from './redact.js'

test('should redact string: single instance', (t) => {
  const config = { key: 'secretphase' }

  const result = redactString(config, 'this is my secretphase')
  t.is(result, 'this is my ********')
})

test('should redact string: multiple instances', (t) => {
  const config = { key: 'secretphase' }

  const result = redactString(config, 'secretphase secretphase secretphase')
  t.is(result, '******** ******** ********')
})

test('should redact string: multiple secrets', (t) => {
  const config = { a: 'secret_a', b: 'secret_b', c: 'secret_c' }

  const result = redactString(config, 'a=secret_a b=secret_b c=secret_c')
  t.is(result, 'a=******** b=******** c=********')
})

test('should redact object: single instance', (t) => {
  const config = { key: 'secret' }

  const result = redactObject(config, {
    apiKey: 'key=secret',
  })

  t.deepEqual(result, {
    apiKey: 'key=********',
  })
})
