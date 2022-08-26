import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except, SetOptional } from 'type-fest'
import type { user_exchange_keys } from 'zapatos/schema'

import * as hash from '../../util/hash.js'
import { keyring } from '../../util/keyring.js'
import type { Pool } from '../../types.js'
import type { UserExchangeKeys } from './types.js'

type UpdateUserExchangeKeysOptions = SetOptional<
  Except<UserExchangeKeys, 'exchangeUid'>,
  'keys' | 'description'
>

const updateUserExchangeKeys = async (
  pool: Pool,
  options: UpdateUserExchangeKeysOptions,
): Promise<void | Error> => {
  const delta: user_exchange_keys.Updatable = {}

  if (options.description) {
    delta.description = options.description
  }

  if (options.keys) {
    const keysJSONString = JSON.stringify(options.keys)
    const keys = keyring.encrypt(keysJSONString)
    if (keys instanceof Error) {
      return keys
    }

    const keysHash = hash.sha256(keysJSONString)

    delta.keys_keyring_id = keys.keyringId
    delta.keys_encrypted = keys.encrypted
    delta.keys_hash = keysHash
    delta.invalidated_at = undefined
  }

  if (Object.keys(delta).length === 0) {
    return new Error('updateUserExchangeKeys: No fields to update.')
  }

  const row = await errorBoundary(async () =>
    db
      .update(
        'user_exchange_keys',
        {
          updated_at: new Date(),
          ...delta,
        },
        {
          uid: options.uid,
          user_uid: options.userUid,
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
