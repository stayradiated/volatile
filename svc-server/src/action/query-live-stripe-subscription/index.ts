import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'

import type { ActionHandler } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'

const subscriptionSchema = z.object({
  id: z.string(),
  latest_invoice: z.object({
    payment_intent: z.object({
      client_secret: z.string(),
    }),
  }),
})
const schema = {
  input: {
    subscriptionId: z.string(),
  },
  output: {
    id: z.string(),
    clientSecret: z.string(),
  },
}
const queryLiveStripeSubscription: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { input } = context
    const { subscriptionId } = input

    // TODO: rate limit this endpoint by userUid

    const subscription = await errorBoundary(async () => {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ['latest_invoice.payment_intent'],
      })

      return subscriptionSchema.parse(subscription)
    })
    if (subscription instanceof Error) {
      return subscription
    }

    return {
      id: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    }
  },
}

export { queryLiveStripeSubscription }
