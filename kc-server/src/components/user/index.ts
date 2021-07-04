import bcrypt from 'bcrypt'
import { v4 as genUID } from 'uuid'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import type { Pool } from '../../types.js'

const BCRYPT_SALT_ROUNDS = 10

type CreateUserOptions = {
  email: string
  password: string
}

const createUser = async (
  pool: Pool,
  options: CreateUserOptions,
): Promise<true | Error> => {
  const { email, password } = options

  // Bcrypt that password!
  // encrypt those emails!
  const [emailEncrypted, emailHash] = [email, 'hash']

  const [existsRow] = await db.sql<s.user.SQL, Array<{ exists: boolean }>>`
    SELECT EXISTS(
      SELECT 1 FROM ${'user'} WHERE ${{ email_hash: emailHash }}
    )
  `.run(pool)
  if (existsRow?.exists) {
    return new Error('Could not create user, email already exists in DB.')
  }

  const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)

  const now = new Date()

  const insert = {
    uid: genUID(),
    created_at: now,
    updated_at: now,
    email_encrypted: emailEncrypted,
    email_hash: emailHash,
    password_hash: passwordHash,
  }

  await db.sql<s.user.SQL>`
    INSERT INTO ${'user'} (${db.cols(insert)})
    VALUES (${db.vals(insert)})
  `.run(pool)

  return true
}

export { createUser }
