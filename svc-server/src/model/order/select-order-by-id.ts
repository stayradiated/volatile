import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToOrder } from './map-row-to-order.js'

import type { Order } from './types.js'

type SelectOrderByIDOptions = {
  userUID: string
  exchangeUID: string
  orderID: string
}

const selectOrderByID = async (
  pool: Pool,
  options: SelectOrderByIDOptions,
): Promise<Order | Error> => {
  const { userUID, exchangeUID, orderID } = options
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne('order', {
        user_uid: userUID,
        exchange_uid: exchangeUID,
        order_id: orderID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return mapRowToOrder(row)
}

export { selectOrderByID }
