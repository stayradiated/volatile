import { throwIfError } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import { test } from '../../test-util/ava.js'

import { keyring } from '../../util/keyring.js'

import { insertUser2FA, InsertUser2FAOptions } from './insert-user-2fa.js'

test('can insert user 2FA', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const input: InsertUser2FAOptions = {
    userUid,
    name: 'Test',
    secret: 'HF2VYCQ7EYBBAS2H',
  }

  await throwIfError<void>(insertUser2FA(pool, input))

  const row = await db
    .selectExactlyOne('user_2fa', { user_uid: userUid })
    .run(pool)

  t.like(row, { name: input.name })

  const decryptedSecret = throwIfError(
    keyring.decrypt(row.secret_encrypted, row.secret_keyring_id),
  )

  t.is(input.secret, decryptedSecret)
})
