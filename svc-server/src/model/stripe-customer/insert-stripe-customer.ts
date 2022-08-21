import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { StripeCustomer } from './types.js'

const insertStripeCustomer = async (
  pool: Pool,
  customer: StripeCustomer,
): Promise<StripeCustomer | Error> => {
  const row = await errorBoundary(async () =>
    db
      .insert('stripe_customer', {
        user_uid: customer.userUid,
        customer_id: customer.customerID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return customer
}

export { insertStripeCustomer }
