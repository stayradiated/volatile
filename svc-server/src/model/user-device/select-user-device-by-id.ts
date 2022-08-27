import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError } from '../../util/error.js'
import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import { mapRowToUserDevice } from './map-row-to-user-device.js'
import type { UserDeviceMasked } from './types.js'

const selectUserDeviceByID = async (
  pool: Pool,
  deviceId: string,
): Promise<UserDeviceMasked | Error> => {
  const deviceIdHash = hash.sha256(deviceId)

  const row = await errorBoundary(async () =>
    db
      .selectOne('user_device', {
        device_id_hash: deviceIdHash,
      })
      .run(pool),
  )
  if (row instanceof Error || !row) {
    return new DbError('Could not find user device.', { cause: row })
  }

  return mapRowToUserDevice(row)
}

export { selectUserDeviceByID }
