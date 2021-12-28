import { errorBoundary } from '@stayradiated/error-boundary'
import type { Pool } from '../../../types.js'

import setLastRunAt from './setLastRunAt.js'
import setNextRunAt from './setNextRunAt.js'

const execute = async (pool: Pool): Promise<string[] | Error> => {
  const dcaOrderUIDList = await errorBoundary(async () => {
    await setNextRunAt(pool)
    const dcaOrderUIDList = await setLastRunAt(pool)
    await setNextRunAt(pool)
    return dcaOrderUIDList
  })
  return dcaOrderUIDList
}

export { execute }
