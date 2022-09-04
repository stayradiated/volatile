import { randomUUID } from 'node:crypto'
import { assertOk, assertError } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { test } from '../../test-util/ava.js'
import * as hash from '../../util/hash.js'
import { firstLine } from '../../util/error.js'
import { keyring } from '../../util/keyring.js'
import { insertUser } from './insert-user.js'

test('insertUser: should create a user', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@sealscarf`
  const emailHash = hash.sha256(email)

  const password = 'hunter2'

  const userResult = await insertUser(pool, {
    email,
    password,
  })
  assertOk(userResult)

  const rows = await db.sql<s.user.SQL, s.user.Selectable[]>`
    SELECT * FROM ${'user'}
      WHERE ${{ uid: userResult.uid }}
  `.run(pool)

  t.is(rows.length, 1)
  const user = rows[0]!

  t.like(user, {
    uid: userResult.uid,
    email_hash: emailHash,
  })

  const emailDecrypted = keyring.decrypt(
    user.email_encrypted,
    user.email_keyring_id,
  )
  t.is(emailDecrypted, email)

  t.true(user.created_at instanceof Date)
  t.true(user.updated_at instanceof Date)

  const output = await hash.bcryptCompare(password, user.password_hash)
  t.true(output)
})

test('insertUser: should enforce unique emails', async (t) => {
  const { pool } = t.context

  const email = `${randomUUID()}@telescope`

  assertOk(
    await insertUser(pool, {
      email,
      password: 'password',
    }),
  )

  const error = await insertUser(pool, {
    email,
    password: 'password',
  })
  assertError(error)
  t.is(
    firstLine(error.message),
    'ERR_ILLEGAL_ARGUMENT: Could not create user, email already exists in DB.',
  )
})
