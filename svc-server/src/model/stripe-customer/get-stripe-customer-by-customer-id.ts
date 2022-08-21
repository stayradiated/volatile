import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { NoEntityError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { StripeCustomer } from './types.js'

type GetStripeCustomerByCustomerIDOptions = {
  customerID: string
}

const getStripeCustomerByCustomerID = async (
  pool: Pool,
  options: GetStripeCustomerByCustomerIDOptions,
): Promise<StripeCustomer | Error> => {
  const { customerID } = options

  const row = await errorBoundary(async () =>
    db
      .selectOne('stripe_customer', {
        customer_id: customerID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new NoEntityError({
      message: `Customer does not exist in database`,
      context: {
        customerID,
      },
    })
  }

  return {
    userUid: row.user_uid,
    customerID: row.customer_id,
  }
}

export { getStripeCustomerByCustomerID }
