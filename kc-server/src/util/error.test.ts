import { test } from '../test-util/ava.js'

import { explainError } from './error.js'

test('explainError: just a message', (t) => {
  const error = explainError('Error: message')
  t.is(error.message, 'Error: message')
})

test('explainError: message with details', (t) => {
  const error = explainError('Error: message', {
    userUID: 'f55495a5-e2e8-43d2-b8ed-308d5f75a11e',
    orderUID: '21d85a8c-9599-45bf-b1fc-bdc15c07ba8c',
  })
  t.is(
    error.message,
    `Error: message | userUID='f55495a5-e2e8-43d2-b8ed-308d5f75a11e', orderUID='21d85a8c-9599-45bf-b1fc-bdc15c07ba8c'`,
  )
})

test('explainError: message with error', (t) => {
  const error = explainError(
    'Error: message',
    {
      UID: 'f55495a5-e2e8-43d2-b8ed-308d5f75a11e',
    },
    new Error('original error'),
  )
  t.is(
    error.message,
    `Error: message | UID='f55495a5-e2e8-43d2-b8ed-308d5f75a11e' | Error: original error`,
  )
})
