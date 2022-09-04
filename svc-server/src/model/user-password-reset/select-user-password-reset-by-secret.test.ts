import { randomUUID } from 'node:crypto'
import { addMinutes, subMinutes } from 'date-fns'
import { assertOk, assertError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'
import { firstLine } from '../../util/error.js'

import { insertUserPasswordReset } from './insert-user-password-reset.js'
import { selectUserPasswordResetBySecret } from './select-user-password-reset-by-secret.js'

test('should get valid password reset', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const secret = `${randomUUID()}-shortcactus`

  const userPasswordReset = await insertUserPasswordReset(pool, {
    userUid,
    expiresAt: addMinutes(new Date(), 5),
    secret,
  })
  assertOk(userPasswordReset)

  const result = await selectUserPasswordResetBySecret(pool, secret)
  assertOk(result)

  t.is(userPasswordReset.uid, result.uid)
})

test('should fail for invalid password reset secret.', async (t) => {
  const { pool } = t.context

  const secret = `${randomUUID()}-airplanelocked`

  const error = await selectUserPasswordResetBySecret(pool, secret)
  assertError(error)

  t.is('ERR_AUTH: Invalid password reset secret.', firstLine(error.message))
})

test('should fail for expired password reset', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const secret = `${randomUUID()}-doughnutrazor`

  assertOk(
    await insertUserPasswordReset(pool, {
      userUid,
      expiresAt: subMinutes(new Date(), 5),
      secret,
    }),
  )

  const error = await selectUserPasswordResetBySecret(pool, secret)
  assertError(error)

  t.is('ERR_AUTH: Invalid password reset secret.', firstLine(error.message))
})
