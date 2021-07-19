import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { wrapError } from '../../utils/wrap-error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type UpdateOrderOptions = Pick<Order, 'UID' | 'closedAt'>

const updateOrder = async (
  pool: Pool,
  options: UpdateOrderOptions,
): Promise<void | Error> => {
  const { closedAt, UID } = options

  const error = await errorBoundary(async () =>
    db
      .update(
        'order',
        { updated_at: new Date(), closed_at: closedAt?.toJSDate() },
        { uid: UID },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return wrapError(`updateOrder: failed for uid='${UID}'`, error)
  }
}

export { updateOrder }
