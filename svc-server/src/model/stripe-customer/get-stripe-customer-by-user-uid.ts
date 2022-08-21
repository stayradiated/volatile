import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { NoEntityError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { StripeCustomer } from './types.js'

type GetStripeCustomerByUseruidOptions = {
  userUid: string
}

const getStripeCustomerByUserUid = async (
  pool: Pool,
  options: GetStripeCustomerByUseruidOptions,
): Promise<StripeCustomer | Error> => {
  const { userUid } = options

  const row = await errorBoundary(async () =>
    db
      .selectOne('stripe_customer', {
        user_uid: userUid,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new NoEntityError({
      message: `User "${userUid}" does not have a customer.`,
      context: {
        userUid,
      },
    })
  }

  return {
    userUid: row.user_uid,
    customerID: row.customer_id,
  }
}

export { getStripeCustomerByUserUid }
