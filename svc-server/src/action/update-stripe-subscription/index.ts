import { errorBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'

import { stripe } from '../../util/stripe.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { getOrCreateStripeCustomer } from '../../model/stripe-customer/index.js'
import { updateStripeSubscription } from '../../model/stripe-subscription/index.js'

type Input = {
  subscription_id: string
  cancel_at_period_end: boolean
}

type Output = {
  subscription_id: string
}

const updateStripeSubscriptionHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const {
    subscription_id: subscriptionId,
    cancel_at_period_end: cancelAtPeriodEnd,
  } = input

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

  return { subscription_id: subscriptionId }
}

export { updateStripeSubscriptionHandler }
