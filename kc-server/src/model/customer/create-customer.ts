import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { getUserEmail } from '../../model/user/index.js'
import type { Pool } from '../../types.js'
import { insertCustomer } from './insert-customer.js'

import type { Customer } from './types.js'

const createCustomer = async (
  pool: Pool,
  userUID: string,
): Promise<Customer | Error> => {
  const userEmail = await getUserEmail(pool, userUID)
  if (userEmail instanceof Error) {
    return userEmail
  }

  const stripeCustomer = await errorBoundary(async () =>
    stripe.customers.create({ email: userEmail }),
  )
  if (stripeCustomer instanceof Error) {
    return stripeCustomer
  }

  const customer = await insertCustomer(pool, {
    userUID,
    customerID: stripeCustomer.id,
  })
  return customer
}

export { createCustomer }
