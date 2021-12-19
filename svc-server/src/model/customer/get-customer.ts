import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import type { Pool } from '../../types.js'
import type { Customer } from './types.js'

const getCustomer = async (
  pool: Pool,
  userUID: string,
): Promise<Customer | Error> => {
  const row = await errorBoundary(async () =>
    db.selectExactlyOne('customer', { user_uid: userUID }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    userUID: row.user_uid,
    customerID: row.customer_id,
  }
}

export { getCustomer }
