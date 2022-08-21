import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import { keyring } from '../../util/keyring.js'

import type { Pool } from '../../types.js'
import type { User2FA } from './types.js'

type InsertUser2FAOptions = Except<User2FA, 'uid'>

const insertUser2FA = async (
  pool: Pool,
  options: InsertUser2FAOptions,
): Promise<void | Error> => {
  const uid = randomUUID()
  const now = new Date()

  const secret = keyring.encrypt(options.secret)
  if (secret instanceof Error) {
    return secret
  }

  const error = await errorBoundary(async () =>
    db
      .insert('user_2fa', {
        uid,
        created_at: now,
        updated_at: now,
        user_uid: options.userUid,
        name: options.name,
        secret_encrypted: secret.encrypted,
        secret_keyring_id: secret.keyringId,
      })
      .run(pool),
  )

  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { insertUser2FA, InsertUser2FAOptions }
