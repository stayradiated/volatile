import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'

import * as hash from '../../util/hash.js'
import { keyring } from '../../util/keyring.js'

import { test } from '../../test-util/ava.js'
import { insertUser } from './insert-user.js'
import { updateUser } from './update-user.js'

test('updateUser: should update password', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const password = 'eagle_tamale'
  await throwIfError(updateUser(pool, { userUID, password }))

  const user = await db.selectExactlyOne('user', { uid: userUID }).run(pool)
  const output = await hash.bcryptCompare(password, user.password_hash)
  t.true(output)
})

test('updateUser: should update email', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const email = 'scorpion_prince@example.com'
  await throwIfError(updateUser(pool, { userUID, email }))

  const user = await db.selectExactlyOne('user', { uid: userUID }).run(pool)

  const emailHash = hash.sha256(email)
  t.is(emailHash, user.email_hash)

  const emailDecrypted = keyring.decrypt(
    user.email_encrypted,
    user.email_keyring_id,
  )
  t.is(emailDecrypted, email)
})

test('updateUser: should check that email is unique', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const email = 'goat_violin@example.com'

  await throwIfError(insertUser(pool, { email, password: '' }))
  const error = await updateUser(pool, { userUID, email })
  if (!(error instanceof Error)) {
    t.fail(`Expected updateUser to fail, but it didn't!`)
    return
  }

  t.true(error instanceof Error)
  t.is(error.message, 'Could not create user, email already exists in DB.')
})
