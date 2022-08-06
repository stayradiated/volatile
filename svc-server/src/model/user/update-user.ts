import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { IllegalArgumentError, DBError } from '../../util/error.js'

import { keyring } from '../../util/keyring.js'
import * as hash from '../../util/hash.js'
import type { Pool } from '../../types.js'
import { hasUserByEmailHash } from './has-user-by-email-hash.js'

type UpdateUserOptions = {
  userUID: string
  email?: string
  password?: string
  emailVerified?: boolean
}

const updateUser = async (
  pool: Pool,
  options: UpdateUserOptions,
): Promise<void | Error> => {
  const { userUID, email, password, emailVerified } = options

  const fields: s.user.Updatable = {
    updated_at: new Date(),
  }

  if (typeof email === 'string') {
    const emailHash = hash.sha256(email)
    const emailIsAlreadyUsed = await hasUserByEmailHash(pool, emailHash)
    if (emailIsAlreadyUsed instanceof Error) {
      return emailIsAlreadyUsed
    }

    if (emailIsAlreadyUsed) {
      return new IllegalArgumentError({
        message: 'Could not create user, email already exists in DB.',
        context: { userUID, emailHash },
      })
    }

    const emailEncrypted = keyring.encrypt(email)
    if (emailEncrypted instanceof Error) {
      return emailEncrypted
    }

    fields.email_encrypted = emailEncrypted.encrypted
    fields.email_keyring_id = emailEncrypted.keyringId
    fields.email_hash = emailHash
    fields.email_verified = false
  }

  if (typeof password === 'string') {
    const passwordHash = await hash.bcrypt(password)
    fields.password_hash = passwordHash
  }

  if (typeof emailVerified === 'boolean') {
    fields.email_verified = emailVerified
  }

  const updatedRows = await errorBoundary(async () =>
    db.update('user', fields, { uid: userUID }, {returning: ['uid']}).run(pool),
  )
  if (updatedRows instanceof Error) {
    return updatedRows
  }
  if (updatedRows.length < 1) {
    return new DBError({
      message: 'Could not find a user with that UID.',
      context: {
        userUID,
        fields,
      }
    })
  }

  return undefined
}

export { updateUser }
