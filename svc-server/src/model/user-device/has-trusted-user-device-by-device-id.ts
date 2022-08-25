import type { Pool } from '../../types.js'
import { selectUserDeviceByID } from './select-user-device-by-id.js'

const hasTrustedUserDeviceByDeviceID = async (
  pool: Pool,
  deviceId: string,
): Promise<boolean> => {
  const userDevice = await selectUserDeviceByID(pool, deviceId)
  if (userDevice instanceof Error) {
    return false
  }

  return userDevice.trusted
}

export { hasTrustedUserDeviceByDeviceID }
