import { errorBoundary } from '@stayradiated/error-boundary'
import type { Pool } from '../../../types.js'

import setLastRunAt from './set-last-run-at.js'
import setNextRunAt from './set-next-run-at.js'

const execute = async (pool: Pool): Promise<string[] | Error> => {
  const dcaOrderuidList = await errorBoundary(async () => {
    await setNextRunAt(pool)
    const dcaOrderuidList = await setLastRunAt(pool)
    await setNextRunAt(pool)
    return dcaOrderuidList
  })
  return dcaOrderuidList
}

export { execute }
