import type { Pool } from '../../types.js'
import type { UserLimit } from './types.js'

const getUserLimit = async (
  _pool: Pool,
  _userUid: string,
): Promise<UserLimit | Error> => {
  return {
    maxEnabledDcaOrderCount: 5,
  }
}

export { getUserLimit }
