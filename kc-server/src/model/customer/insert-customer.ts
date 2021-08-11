import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { Customer } from './types.js'

const insertCustomer = async (
  pool: Pool,
  customer: Customer,
): Promise<Customer | Error> => {
  const row = await errorBoundary(async () =>
    db
      .insert('customer', {
        user_uid: customer.userUID,
        customer_id: customer.customerID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return customer
}

export { insertCustomer }
