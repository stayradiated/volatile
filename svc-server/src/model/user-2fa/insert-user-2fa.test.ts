import { assertOk } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import { test } from '../../test-util/ava.js'

import { keyring } from '../../util/keyring.js'

import type { InsertUser2FaOptions } from './insert-user-2fa.js'
import { insertUser2Fa } from './insert-user-2fa.js'

test('can insert user 2Fa', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const input: InsertUser2FaOptions = {
    userUid,
    name: 'Test',
    secret: 'HF2VYCQ7EYBBAS2H',
  }

  assertOk(await insertUser2Fa(pool, input))

  const row = await db
    .selectExactlyOne('user_2fa', { user_uid: userUid })
    .run(pool)

  t.like(row, { name: input.name })

  const decryptedSecret = keyring.decrypt(
    row.secret_encrypted,
    row.secret_keyring_id,
  )
  assertOk(decryptedSecret)

  t.is(input.secret, decryptedSecret)
})
