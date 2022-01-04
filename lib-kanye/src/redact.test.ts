import test from 'ava'

import { buildRedactRegExp, redactString, redactObject } from './redact.js'

test('should redact string: single instance', (t) => {
  const regExp = buildRedactRegExp(['secretphase'])
  const result = redactString(regExp, 'this is my secretphase')
  t.is(result, 'this is my ********')
})

test('should redact string: multiple instances', (t) => {
  const regExp = buildRedactRegExp(['secretphase'])
  const result = redactString(regExp, 'secretphase secretphase secretphase')
  t.is(result, '******** ******** ********')
})

test('should redact string: multiple secrets', (t) => {
  const regExp = buildRedactRegExp([
    'secret_a',
    'secret_b',
    'secret_c',
  ])

  const result = redactString(regExp, 'a=secret_a b=secret_b c=secret_c')
  t.is(result, 'a=******** b=******** c=********')
})

test('should redact object: single instance', (t) => {
  const regExp = buildRedactRegExp(['secret'])

  const result = redactObject(regExp, {
    apiKey: 'key=secret',
  })

  t.deepEqual(result, {
    apiKey: 'key=********',
  })
})
