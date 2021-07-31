import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type SelectOrderByIDOptions = {
  userUID: string
  exchangeUID: string
  orderID: string
}

const hasOrderByID = async (
  pool: Pool,
  options: SelectOrderByIDOptions,
): Promise<boolean | Error> => {
  const { userUID, exchangeUID, orderID } = options
  const rows = await errorBoundary(async () =>
    db
      .select(
        'order',
        {
          user_uid: userUID,
          exchange_uid: exchangeUID,
          id: orderID,
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
