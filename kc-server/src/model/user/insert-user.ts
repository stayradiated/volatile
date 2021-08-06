import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { keyring } from '../../util/keyring.js'
import * as hash from '../../util/hash.js'
import type { Pool } from '../../types.js'
import { hasUserByEmailHash } from './has-user-by-email-hash.js'

import type { User } from './types.js'

type InsertUserOptions = {
  email: string
  password: string
}

const insertUser = async (
  pool: Pool,
  options: InsertUserOptions,
): Promise<User | Error> => {
  const { email, password } = options

  const emailEncrypted = keyring.encrypt(email)
  if (emailEncrypted instanceof Error) {
    return emailEncrypted
  }

  const emailHash = hash.sha256(email)

  const emailIsAlreadyUsed = await hasUserByEmailHash(pool, emailHash)
  if (emailIsAlreadyUsed instanceof Error) {
    return emailIsAlreadyUsed
  }

  if (emailIsAlreadyUsed) {
    return new Error('Could not create user, email already exists in DB.')
  }

  const passwordHash = await hash.bcrypt(password)

  const UID = randomUUID()
  const now = new Date()

  const insert: s.user.Insertable = {
    uid: UID,
    created_at: now,
    updated_at: now,
    email_keyring_id: emailEncrypted.keyringId,
    email_encrypted: emailEncrypted.encrypted,
    email_hash: emailHash,
    password_hash: passwordHash,
  }

  const error = await errorBoundary(async () =>
    db.insert('user', insert).run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return { UID }
}

export { insertUser }
