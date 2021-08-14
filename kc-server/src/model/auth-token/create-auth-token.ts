import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import * as hash from '../../util/hash.js'
import type { Pool } from '../../types.js'
import { generateAuthToken } from './generate-auth-token.js'

type CreateAuthTokenOptions = {
  email: string
  password: string
}

type AuthTokenResult = {
  userUID: string
  authToken: string
  expiresAt: DateTime
}

const createAuthToken = async (
  pool: Pool,
  options: CreateAuthTokenOptions,
): Promise<AuthTokenResult | Error> => {
  const { email, password } = options

  const emailHash = hash.sha256(email)

  const row = await errorBoundary(async () =>
    db
      .selectOne(
        'user',
        { email_hash: emailHash },
        {
          columns: ['uid', 'password_hash'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new Error('Invalid email or password.')
  }

  const passwordMatches = await hash.bcryptCompare(password, row.password_hash)
  if (!passwordMatches) {
    return new Error('Invalid email or password.')
  }

  const userUID = row.uid
  const { authToken, expiresAt } = generateAuthToken(userUID)

  return { userUID, authToken, expiresAt }
}

export { createAuthToken }
