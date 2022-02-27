import type { Pool } from '../../types.js'
import type { UserLimit } from './types.js'

const getUserLimit = async (
  _pool: Pool,
  _userUID: string,
): Promise<UserLimit | Error> => {
  return {
    maxEnabledDCAOrderCount: 5,
  }
}

export { getUserLimit }
