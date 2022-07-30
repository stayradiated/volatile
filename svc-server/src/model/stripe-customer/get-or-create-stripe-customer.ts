import type { Pool } from '../../types.js'
import { NoEntityError } from '../../util/error.js'

import { getStripeCustomer } from './get-stripe-customer.js'
import { createStripeCustomer } from './create-stripe-customer.js'

import type { StripeCustomer } from './types.js'

const getOrCreateStripeCustomer = async (
  pool: Pool,
  userUID: string,
): Promise<StripeCustomer | Error> => {
  const existingStripeCustomer = await getStripeCustomer(pool, { userUID })

  if (existingStripeCustomer instanceof NoEntityError) {
    return createStripeCustomer(pool, userUID)
  }

  if (existingStripeCustomer instanceof Error) {
    return existingStripeCustomer
  }

  return existingStripeCustomer
}

export { getOrCreateStripeCustomer }
