import { randomUUID } from 'crypto'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type { Except } from 'type-fest'

import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import type { UserEmailVerify, UserEmailVerifyMasked } from './types.js'

type UpsertUserEmailVerifyOptions = Except<UserEmailVerify, 'UID'>

const upsertUserEmailVerify = async (
  pool: Pool,
  options: UpsertUserEmailVerifyOptions,
): Promise<UserEmailVerifyMasked | Error> => {
  const UID = randomUUID()
  const now = new Date()

  const secretHash = hash.sha256(options.secret)

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'user_email_verify',
        {
          uid: UID,
          created_at: now,
          updated_at: now,
          user_uid: options.userUID,
          secret_hash: secretHash,
        },
        ['user_uid'],
        {
          updateColumns: ['updated_at', 'secret_hash'],
        },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    UID,
    userUID: options.userUID,
  }
}

export { upsertUserEmailVerify, UpsertUserEmailVerifyOptions }
