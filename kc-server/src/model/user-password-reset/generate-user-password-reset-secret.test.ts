import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { generateUserPasswordResetSecret } from './generate-user-password-reset-secret.js'

test('generate random secret', async (t) => {
  const secret = await throwIfError<string>(generateUserPasswordResetSecret())
  t.is('string', typeof secret)
  t.is(80, secret.length)
})
