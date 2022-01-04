import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type UntrustAllUserDevicesOptions = {
  userUID: string
}

const untrustAllUserDevices = async (pool: Pool, options: UntrustAllUserDevicesOptions): Promise<string[]|Error> => {
  const { userUID } = options

  const rows = await errorBoundary(() => db.update('user_device',{
    updated_at: new Date(),
    trusted: false
  }, {
    user_uid: userUID,
    trusted: true,
  }, {
    returning: ['uid']
  }).run(pool))

  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => row.uid)
}

export { untrustAllUserDevices }
