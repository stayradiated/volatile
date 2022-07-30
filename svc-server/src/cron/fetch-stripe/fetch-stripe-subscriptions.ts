import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'
import Stripe from 'stripe'

import type { Pool } from '../../types.js'

import { stripe } from '../../util/stripe.js'
import { getStripeCustomer } from '../../model/stripe-customer/index.js'
import { upsertStripeSubscription } from '../../model/stripe-subscription/index.js'

const fetchStripeSubscriptions = async (pool: Pool) => {
  const subscriptions = await errorBoundary(async () => {
    const all: Stripe.Subscription[] = []
    for await (const subscription of stripe.subscriptions.list()) {
      all.push(subscription)
    }

    return all
  })
  if (subscriptions instanceof Error) {
    return subscriptions
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      subscriptions.map(async (subscription) => {
        const customerID = String(subscription.customer)

        const customer = await getStripeCustomer(pool, { customerID })
        if (customer instanceof Error) {
          return new Error(`Missing entry for customer "${customerID}"`)
        }

        return upsertStripeSubscription(pool, {
          ID: subscription.id,
          createdAt: fromUnixTime(subscription.created),
          updatedAt: new Date(),
          customerID,
          priceID: subscription.items.data[0]!.price.id,
          quantity: subscription.items.data[0]!.quantity ?? 0,
          cancelAt: subscription.cancel_at
            ? fromUnixTime(subscription.cancel_at)
            : undefined,
          canceledAt: subscription.canceled_at
            ? fromUnixTime(subscription.canceled_at)
            : undefined,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
          currentPeriodEnd: fromUnixTime(subscription.current_period_end),
          currentPeriodStart: fromUnixTime(subscription.current_period_start),
          description: subscription.description ?? undefined,
          status: subscription.status,
        })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return `Successfully fetched ${subscriptions.length} subscription(s).`
}

export { fetchStripeSubscriptions }
