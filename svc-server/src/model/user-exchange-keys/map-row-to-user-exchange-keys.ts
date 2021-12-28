import * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import { ConfigError } from '../../util/error.js'
import { keyring } from '../../util/keyring.js'
import type { UserExchangeKeys } from './types.js'

const mapRowToUserExchangeKeys = <Keys extends Record<string, string>>(
  row: s.user_exchange_keys.JSONSelectable,
): UserExchangeKeys<Keys> | Error => {
  const jsonKeys = keyring.decrypt(row.keys_encrypted, row.keys_keyring_id)
  if (jsonKeys instanceof Error) {
    return new ConfigError({
      message: 'Could not decrypt User Exchange Keys.',
      cause: jsonKeys,
      context: { userExchangeKeysUID: row.uid },
    })
  }

  const keys = JSON.parse(jsonKeys) as Keys

  return {
    UID: row.uid,
    userUID: row.user_uid,
    exchangeUID: row.exchange_uid,
    keys,
    description: row.description,
    invalidatedAt: row.invalidated_at
      ? parseISO(row.invalidated_at)
      : undefined,
  }
}

export { mapRowToUserExchangeKeys }
