import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type SelectOrderByIDOptions = {
  userUid: string
  exchangeUid: string
  orderId: string
}

const hasOrderByID = async (
  pool: Pool,
  options: SelectOrderByIDOptions,
): Promise<boolean | Error> => {
  const { userUid, exchangeUid, orderId } = options
  const rows = await errorBoundary(async () =>
    db
      .select(
        'order',
        {
          user_uid: userUid,
          exchange_uid: exchangeUid,
          order_id: orderId,
        },
        {
          columns: ['uid'],
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.length > 0
}

export { hasOrderByID }
