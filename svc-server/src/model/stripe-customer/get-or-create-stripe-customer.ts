import type { Pool } from '../../types.js'
import { NoEntityError } from '../../util/error.js'

import { getStripeCustomerByUserUid } from './get-stripe-customer-by-user-uid.js'
import { createStripeCustomer } from './create-stripe-customer.js'

import type { StripeCustomer } from './types.js'

const getOrCreateStripeCustomer = async (
  pool: Pool,
  userUid: string,
): Promise<StripeCustomer | Error> => {
  const existingStripeCustomer = await getStripeCustomerByUserUid(pool, {
    userUid,
  })

  if (existingStripeCustomer instanceof NoEntityError) {
    return createStripeCustomer(pool, userUid)
  }

  if (existingStripeCustomer instanceof Error) {
    return existingStripeCustomer
  }

  return existingStripeCustomer
}

export { getOrCreateStripeCustomer }
