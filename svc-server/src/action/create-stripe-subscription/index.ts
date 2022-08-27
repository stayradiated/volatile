import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'

import { stripe } from '../../util/stripe.js'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'

import { getOrCreateStripeCustomer } from '../../model/stripe-customer/index.js'

const schema = {
  input: {
    priceId: z.string(),
  },
  output: {
    subscriptionId: z.string(),
    clientSecret: z.string(),
  },
}

const createStripeSubscription: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userUid } = session
    if (!userUid)
      return new MissingRequiredArgumentError(
        messageWithContext(
          `userUid is required
    `,
          { userUid },
        ),
      )

    const { priceId } = input

    const customer = await getOrCreateStripeCustomer(pool, userUid)
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
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    }
  },
}

export { createStripeSubscription }
