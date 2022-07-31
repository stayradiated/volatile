import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'

const subscriptionSchema = z.object({
  id: z.string(),
  latest_invoice: z.object({
    payment_intent: z.object({
      client_secret: z.string(),
    }),
  }),
})

type Input = {
  subscription_id: string
}

type Output = {
  id: string
  client_secret: string
}

const queryLiveStripeSubscription: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { input } = context
  const { subscription_id: subscriptionID } = input

  // TODO: rate limit this endpoint by userUID

  const subscription = await errorBoundary(async () => {
    const subscription = await stripe.subscriptions.retrieve(subscriptionID, {
      expand: ['latest_invoice.payment_intent'],
    })

    return subscriptionSchema.parse(subscription)
  })
  if (subscription instanceof Error) {
    return subscription
  }

  return {
    id: subscription.id,
    client_secret: subscription.latest_invoice.payment_intent.client_secret,
  }
}

export { queryLiveStripeSubscription }
