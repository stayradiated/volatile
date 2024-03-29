import * as z from 'zod'
import { errorBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'

import { stripe } from '../../util/stripe.js'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'

import { getOrCreateStripeCustomer } from '../../model/stripe-customer/index.js'
import { updateStripeSubscription } from '../../model/stripe-subscription/index.js'

const schema = {
  input: {
    subscriptionId: z.string(),
    cancelAtPeriodEnd: z.boolean(),
  },
  output: {
    subscriptionId: z.string(),
  },
}
const updateStripeSubscriptionHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, { userUid }),
      )
    }

    const { subscriptionId, cancelAtPeriodEnd } = input

    const stripeCustomer = await getOrCreateStripeCustomer(pool, userUid)
    if (stripeCustomer instanceof Error) {
      return stripeCustomer
    }

    const error = await errorBoundary(async () => {
      const subscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: cancelAtPeriodEnd,
      })
      return updateStripeSubscription(pool, {
        ID: subscriptionId,
        cancelAt: subscription.cancel_at
          ? fromUnixTime(subscription.cancel_at)
          : undefined,
        canceledAt: subscription.canceled_at
          ? fromUnixTime(subscription.canceled_at)
          : undefined,
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
      })
    })
    if (error instanceof Error) {
      return error
    }

    return { subscriptionId }
  },
}

export { updateStripeSubscriptionHandler }
