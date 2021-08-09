import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import * as hash from '../../util/hash.js'
import { keyring } from '../../util/keyring.js'
import type { Pool } from '../../types.js'
import type { UserExchangeKeys } from './types.js'

type UpdateUserExchangeKeysOptions = Except<UserExchangeKeys, 'exchangeUID'>

const updateUserExchangeKeys = async (
  pool: Pool,
  options: UpdateUserExchangeKeysOptions,
): Promise<void | Error> => {
  const keysJSONString = JSON.stringify(options.keys)
  const keys = keyring.encrypt(keysJSONString)
  if (keys instanceof Error) {
    return keys
  }

  const keysHash = hash.sha256(keysJSONString)

  const row = await errorBoundary(async () =>
    db
      .update(
        'user_exchange_keys',
        {
          updated_at: new Date(),
          keys_keyring_id: keys.keyringId,
          keys_encrypted: keys.encrypted,
          keys_hash: keysHash,
          description: options.description,
          invalidated_at: undefined,
        },
        {
          uid: options.UID,
          user_uid: options.userUID,
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return undefined
}

export { updateUserExchangeKeys }
