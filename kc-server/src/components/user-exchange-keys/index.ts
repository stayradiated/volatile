import { v4 as genUID } from 'uuid'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { DateTime } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import { keyring } from '../../utils/keyring.js'

import type { Pool } from '../../types.js'

type UserExchangeKeys = {
  UID: string
  userUID: string
  exchangeUID: string
  keys: Record<string, string>
  description: string
  invalidatedAt: DateTime | undefined
}

const setUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeys: Except<UserExchangeKeys, 'UID'>,
): Promise<UserExchangeKeys | Error> => {
  const keys = keyring.encrypt(JSON.stringify(userExchangeKeys.keys))
  if (keys instanceof Error) {
    return keys
  }

  const insert: s.user_exchange_keys.Insertable = {
    uid: genUID(),
    user_uid: userExchangeKeys.userUID,
    exchange_uid: userExchangeKeys.exchangeUID,
    created_at: new Date(),
    updated_at: new Date(),
    keys_keyring_id: keys.keyringId,
    keys_encrypted: keys.encrypted,
    description: userExchangeKeys.description,
    invalidated_at: userExchangeKeys.invalidatedAt?.toJSDate(),
  }

  const rows = await errorBoundary(async () =>
    db.sql<s.user_exchange_keys.SQL, s.user_exchange_keys.Selectable[]>`
    INSERT INTO ${'user_exchange_keys'} (${db.cols(insert)})
    VALUES (${db.vals(insert)})
    ON CONFLICT ON CONSTRAINT unique_user_exchange_keys_user_uid_exchange_uid
      DO UPDATE SET
        updated_at = EXCLUDED.updated_at,
        keys_keyring_id = EXCLUDED.keys_keyring_id,
        keys_encrypted = EXCLUDED.keys_encrypted,
        description = EXCLUDED.description,
        invalidated_at = EXCLUDED.invalidated_at
    RETURNING uid
  `.run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return new Error(`Failed to insert row into user_exchange_keys.`)
  }

  return {
    ...userExchangeKeys,
    UID: row.uid,
  }
}

type GetUserExchangeKeysOptions = {
  userUID: string
  exchangeUID: string
}

const getUserExchangeKeys = async (
  pool: Pool,
  options: GetUserExchangeKeysOptions,
): Promise<UserExchangeKeys | Error> => {
  const { userUID, exchangeUID } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.user_exchange_keys.SQL, s.user_exchange_keys.Selectable[]>`
    SELECT ${'user_exchange_keys'}.*
    FROM ${'user_exchange_keys'}
    WHERE ${{
      user_uid: userUID,
      exchange_uid: exchangeUID,
    }}
  `.run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return new Error(
      `No user_exchange_keys exist for exchangeUID="${exchangeUID}" userUID="${userUID}"`,
    )
  }

  const jsonKeys = keyring.decrypt(row.keys_encrypted, row.keys_keyring_id)
  if (jsonKeys instanceof Error) {
    return jsonKeys
  }

  const keys = JSON.parse(jsonKeys) as Record<string, string>

  return {
    UID: row.uid,
    userUID: row.user_uid,
    exchangeUID: row.exchange_uid,
    keys,
    description: row.description,
    invalidatedAt: row.invalidated_at
      ? DateTime.fromJSDate(row.invalidated_at)
      : undefined,
  }
}

export { UserExchangeKeys, setUserExchangeKeys, getUserExchangeKeys }
