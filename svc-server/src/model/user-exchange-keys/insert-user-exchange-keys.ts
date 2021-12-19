import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import * as hash from '../../util/hash.js'
import { keyring } from '../../util/keyring.js'
import type { Pool } from '../../types.js'
import type { UserExchangeKeys } from './types.js'

const insertUserExchangeKeys = async (
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

  const row = await errorBoundary(async () =>
    db.insert('user_exchange_keys', insert, { returning: ['uid'] }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...userExchangeKeys,
    UID: row.uid,
  }
}

export { insertUserExchangeKeys }
