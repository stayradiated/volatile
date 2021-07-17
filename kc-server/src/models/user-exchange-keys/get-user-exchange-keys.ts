import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { DateTime } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { keyring } from '../../utils/keyring.js'
import type { Pool } from '../../types.js'
import type { UserExchangeKeys } from './types.js'

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
      `No user_exchange_keys exist for exchangeUID='${exchangeUID}' userUID='${userUID}'`,
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

export { getUserExchangeKeys }
