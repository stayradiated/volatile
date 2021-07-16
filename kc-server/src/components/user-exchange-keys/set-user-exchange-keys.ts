import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import * as hash from '../../utils/hash.js'
import { keyring } from '../../utils/keyring.js'
import type { Pool } from '../../types.js'
import type { UserExchangeKeys } from './types.js'

const setUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeys: Except<UserExchangeKeys, 'UID'>,
): Promise<UserExchangeKeys | Error> => {
  const keysJSONString = JSON.stringify(userExchangeKeys.keys)
  const keys = keyring.encrypt(keysJSONString)
  if (keys instanceof Error) {
    return keys
  }

  const keysHash = hash.sha256(keysJSONString)

  const insert: s.user_exchange_keys.Insertable = {
    uid: randomUUID(),
    user_uid: userExchangeKeys.userUID,
    exchange_uid: userExchangeKeys.exchangeUID,
    created_at: new Date(),
    updated_at: new Date(),
    keys_keyring_id: keys.keyringId,
    keys_encrypted: keys.encrypted,
    keys_hash: keysHash,
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

export { setUserExchangeKeys }
