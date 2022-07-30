import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { NoEntityError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { StripeCustomer } from './types.js'

type GetStripeCustomerOptions = {
  userUID?: string
  customerID?: string
}

const getStripeCustomer = async (
  pool: Pool,
  options: GetStripeCustomerOptions,
): Promise<StripeCustomer | Error> => {
  const { userUID, customerID } = options

  const row = await errorBoundary(async () =>
    db
      .selectOne('stripe_customer', {
        user_uid: userUID,
        customer_id: customerID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new NoEntityError({
      message: 'User does not have a customer.',
      context: {
        userUID,
      },
    })
  }

  return {
    userUID: row.user_uid,
    customerID: row.customer_id,
  }
}

export { getStripeCustomer }
