import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import type { UserDevice } from './types.js'

type UpsertUserDevicesOptions = Except<UserDevice, 'UID'>

const upsertUserDevice = async (
  pool: Pool,
  options: UpsertUserDevicesOptions,
): Promise<void | Error> => {
  const UID = randomUUID()
  const now = new Date()

  const deviceIDHash = hash.sha256(options.deviceID)

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'user_device',
        {
          uid: UID,
          created_at: now,
          updated_at: now,
          accessed_at: options.accessedAt.toJSDate(),
          user_uid: options.userUID,
          name: options.name,
          device_id_hash: deviceIDHash,
          trusted: options.trusted,
        },
        ['user_uid', 'device_id_hash'],
        {
          updateColumns: ['updated_at', 'accessed_at', 'name', 'trusted'],
        },
      )
      .run(pool),
  )

  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertUserDevice, UpsertUserDevicesOptions }
