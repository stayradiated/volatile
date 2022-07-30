import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import type { Pool } from '../../types.js'
import type { StripeSubscription } from './types.js'

type UpsertStripeSubscriptionOptions = StripeSubscription

const upsertStripeSubscription = async (
  pool: Pool,
  stripeSubscription: UpsertStripeSubscriptionOptions,
): Promise<StripeSubscription | Error> => {
  const row = await errorBoundary(async () =>
    db
      .upsert(
        'stripe_subscription',
        {
          id: stripeSubscription.ID,
          created_at: stripeSubscription.createdAt,
          updated_at: stripeSubscription.updatedAt,
          customer_id: stripeSubscription.customerID,
          price_id: stripeSubscription.priceID,
          quantity: stripeSubscription.quantity,
          cancel_at: stripeSubscription.cancelAt,
          canceled_at: stripeSubscription.canceledAt,
          cancel_at_period_end: stripeSubscription.cancelAtPeriodEnd,
          current_period_end: stripeSubscription.currentPeriodEnd,
          current_period_start: stripeSubscription.currentPeriodStart,
          description: stripeSubscription.description,
          status: stripeSubscription.status,
        },
        db.constraint('stripe_subscription_pkey'),
        {
          updateColumns: [
            'updated_at',
            'customer_id',
            'price_id',
            'quantity',
            'cancel_at',
            'canceled_at',
            'cancel_at_period_end',
            'current_period_end',
            'current_period_start',
            'description',
            'status',
          ],
          returning: ['id', 'created_at'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...stripeSubscription,
    createdAt: parseISO(row.created_at),
  }
}

export { upsertStripeSubscription, UpsertStripeSubscriptionOptions }
