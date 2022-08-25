import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import { DbError } from '../../util/error.js'

import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import type { UserDevice } from './types.js'

type UpsertUserDevicesOptions = Except<UserDevice, 'uid'>

const upsertUserDevice = async (
  pool: Pool,
  options: UpsertUserDevicesOptions,
): Promise<string | Error> => {
  const uid = randomUUID()
  const now = new Date()

  const deviceIdHash = hash.sha256(options.deviceId)

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'user_device',
        {
          uid,
          created_at: now,
          updated_at: now,
          accessed_at: options.accessedAt,
          user_uid: options.userUid,
          name: options.name,
          device_id_hash: deviceIdHash,
          trusted: options.trusted,
        },
        ['user_uid', 'device_id_hash'],
        {
          updateColumns: ['updated_at', 'accessed_at', 'name', 'trusted'],
          returning: ['uid'],
        },
      )
      .run(pool),
  )

  if (error instanceof Error) {
    return new DbError({
      message: 'Could not upsert user device.',
      cause: error,
      context: { options },
    })
  }

  return error.uid
}

export { upsertUserDevice, UpsertUserDevicesOptions }
