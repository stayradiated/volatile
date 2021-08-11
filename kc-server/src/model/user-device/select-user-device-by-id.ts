import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { explainError } from '../../util/error.js'
import * as hash from '../../util/hash.js'

import type { Pool } from '../../types.js'
import { mapRowToUserDevice } from './map-row-to-user-device.js'
import type { UserDeviceMasked } from './types.js'

const selectUserDeviceByID = async (
  pool: Pool,
  deviceID: string,
): Promise<UserDeviceMasked | Error> => {
  const deviceIDHash = hash.sha256(deviceID)

  const row = await errorBoundary(async () =>
    db
      .selectOne('user_device', {
        device_id_hash: deviceIDHash,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return explainError('Could not find user device.', {
      deviceIDHash,
    })
  }

  return mapRowToUserDevice(row)
}

export { selectUserDeviceByID }
