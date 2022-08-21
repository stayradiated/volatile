import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToOrder } from './map-row-to-order.js'

import type { Order } from './types.js'

type SelectOrderByIDOptions = {
  userUid: string
  exchangeUid: string
  orderId: string
}

const selectOrderByID = async (
  pool: Pool,
  options: SelectOrderByIDOptions,
): Promise<Order | Error> => {
  const { userUid, exchangeUid, orderId } = options
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne('order', {
        user_uid: userUid,
        exchange_uid: exchangeUid,
        order_id: orderId,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return mapRowToOrder(row)
}

export { selectOrderByID }
