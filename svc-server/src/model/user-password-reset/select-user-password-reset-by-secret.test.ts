import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'
import { asError } from '../../test-util/as-error.js'

import { insertUserPasswordReset } from './insert-user-password-reset.js'
import { selectUserPasswordResetBySecret } from './select-user-password-reset-by-secret.js'
import type { UserPasswordResetMasked } from './types.js'

test('should get valid password reset', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const secret = 'shortcactus'

  const { UID: userPasswordResetUID } =
    await throwIfError<UserPasswordResetMasked>(
      insertUserPasswordReset(pool, {
        userUID,
        expiresAt: DateTime.local().plus({ minutes: 5 }),
        secret,
      }),
    )

  const result = await throwIfError<UserPasswordResetMasked>(
    selectUserPasswordResetBySecret(pool, secret),
  )

  t.is(userPasswordResetUID, result.UID)
})

test('should fail for invalid password reset secret.', async (t) => {
  const { pool } = t.context

  const secret = 'airplanelocked'

  const error = await asError(selectUserPasswordResetBySecret(pool, secret))

  t.is('E_AUTH: Invalid password reset secret.', error.message)
})

test('should fail for expired password reset', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const secret = 'doughnutrazor'

  await throwIfError<UserPasswordResetMasked>(
    insertUserPasswordReset(pool, {
      userUID,
      expiresAt: DateTime.local().minus({ minutes: 5 }),
      secret,
    }),
  )

  const error = await asError(selectUserPasswordResetBySecret(pool, secret))

  t.is('E_AUTH: Invalid password reset secret.', error.message)
})
