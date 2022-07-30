import Stripe from 'stripe'
import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

import { getOrCreateStripeCustomer } from '../../model/stripe-customer/index.js'

type Input = {
  status?: Stripe.Subscription.Status
}

type Output = {
  subscriptions: Stripe.Subscription[]
}

const querySubscriptions: ActionHandlerFn<Input, Output> = async (context) => {
  const { input, pool, session } = context
  const { status } = input
  const { userUID } = session

  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const stripeCustomer = await getOrCreateStripeCustomer(pool, userUID)
  if (stripeCustomer instanceof Error) {
    return stripeCustomer
  }

  const subscriptions = await errorBoundary(() => {
    if (status === 'incomplete') {
      return stripe.subscriptions.list({
        customer: stripeCustomer.customerID,
        status: 'incomplete',
        expand: ['data.latest_invoice.payment_intent'],
      })
    }

    return stripe.subscriptions.list({
      customer: stripeCustomer.customerID,
      status: status ?? 'all',
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
