import { inspect } from 'util'
import test from 'ava'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { pool } from '../../pool.js'
import * as hash from '../../util/hash.js'
import { keyring } from '../../util/keyring.js'
import { insertUser } from './index.js'

test('insertUser: should create a user', async (t) => {
  const email = 'user@domain.com'
  const emailHash = hash.sha256(email)

  const password = 'hunter2'

  const userResult = await insertUser(pool, {
    email,
    password,
  })
  if (userResult instanceof Error) {
    t.fail(inspect(userResult))
    return
  }

  const rows = await db.sql<s.user.SQL, s.user.Selectable[]>`
    SELECT * FROM ${'user'}
      WHERE ${{ uid: userResult.UID }}
  `.run(pool)

  t.is(rows.length, 1)
  const user = rows[0]!

  t.like(user, {
    uid: userResult.UID,
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
  const user = await insertUser(pool, {
    email: 'user.a@domain.com',
    password: 'password',
  })
  if (user instanceof Error) {
    t.fail(inspect(user))
    return
  }

  const error = await insertUser(pool, {
    email: 'user.a@domain.com',
    password: 'password',
  })
  t.true(error instanceof Error)
  t.like(error, {
    message: 'Could not create user, email already exists in DB.',
  })
})
