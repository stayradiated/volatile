import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { getOrCreateStripeCustomer } from '../../model/stripe-customer/index.js'

type Input = {
  price_id: string
}

type Output = {
  subscription_id: string
  client_secret: string
}

const createStripeSubscription: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const { price_id: priceId } = input

  const customer = await getOrCreateStripeCustomer(pool, userUID)
  if (customer instanceof Error) {
    return customer
  }

  const subscription = await errorBoundary(async () => {
    return stripe.subscriptions.create({
      customer: customer.customerID,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    })
  })

  if (subscription instanceof Error) {
    return subscription
  }

  if (
    !subscription.latest_invoice ||
    typeof subscription.latest_invoice === 'string' ||
    !subscription.latest_invoice.payment_intent ||
    typeof subscription.latest_invoice.payment_intent === 'string' ||
    !subscription.latest_invoice.payment_intent.client_secret
  ) {
    return new Error('Fail.')
  }

  return {
    subscription_id: subscription.id,
    client_secret: subscription.latest_invoice.payment_intent.client_secret,
  }
}

export { createStripeSubscription }
