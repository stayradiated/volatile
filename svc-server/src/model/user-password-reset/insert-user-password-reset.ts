import { randomUUID } from 'node:crypto'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type { Except } from 'type-fest'

import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import type { UserPasswordReset, UserPasswordResetMasked } from './types.js'

type InsertUserPasswordResetOptions = Except<UserPasswordReset, 'uid'>

const insertUserPasswordReset = async (
  pool: Pool,
  options: InsertUserPasswordResetOptions,
): Promise<UserPasswordResetMasked | Error> => {
  const uid = randomUUID()
  const now = new Date()

  const secretHash = hash.sha256(options.secret)

  const error = await errorBoundary(async () =>
    db
      .insert('user_password_reset', {
        uid,
        created_at: now,
        updated_at: now,
        user_uid: options.userUid,
        expires_at: options.expiresAt,
        secret_hash: secretHash,
      })
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    uid,
    userUid: options.userUid,
    expiresAt: options.expiresAt,
  }
}

export { insertUserPasswordReset, type InsertUserPasswordResetOptions }
