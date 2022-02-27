import Stripe from 'stripe'
import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

import { getOrCreateCustomer } from '../../model/customer/index.js'

type Input = Record<string, never>

type Output = {
  subscriptions: Stripe.Subscription[]
}

const querySubscriptions: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const customer = await getOrCreateCustomer(pool, userUID)
  if (customer instanceof Error) {
    return customer
  }

  const subscriptions = await errorBoundary(() => {
    return stripe.subscriptions.list({
      customer: customer.customerID,
      status: 'all',
    })
  })

  if (subscriptions instanceof Error) {
    return subscriptions
  }

  return {
    subscriptions: subscriptions.data,
  }
}

export { querySubscriptions }
