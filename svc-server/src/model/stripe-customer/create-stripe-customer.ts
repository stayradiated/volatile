import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { getUserEmail } from '../../model/user/index.js'
import type { Pool } from '../../types.js'
import { insertStripeCustomer } from './insert-stripe-customer.js'

import type { StripeCustomer } from './types.js'

const createStripeCustomer = async (
  pool: Pool,
  userUid: string,
): Promise<StripeCustomer | Error> => {
  const userEmail = await getUserEmail(pool, userUid)
  if (userEmail instanceof Error) {
    return userEmail
  }

  const stripeStripeCustomer = await errorBoundary(async () =>
    stripe.customers.create({ email: userEmail }),
  )
  if (stripeStripeCustomer instanceof Error) {
    return stripeStripeCustomer
  }

  const customer = await insertStripeCustomer(pool, {
    userUid,
    customerID: stripeStripeCustomer.id,
  })
  return customer
}

export { createStripeCustomer }
