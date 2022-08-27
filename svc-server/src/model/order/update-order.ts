import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type UpdateOrderOptions = Pick<Order, 'uid' | 'closedAt'>

const updateOrder = async (
  pool: Pool,
  options: UpdateOrderOptions,
): Promise<void | Error> => {
  const { closedAt, uid } = options

  const error = await errorBoundary(async () =>
    db
      .update('order', { updated_at: new Date(), closed_at: closedAt }, { uid })
      .run(pool),
  )
  if (error instanceof Error) {
    return new DbError('updateOrder failed', { cause: error })
  }
}

export { updateOrder }
