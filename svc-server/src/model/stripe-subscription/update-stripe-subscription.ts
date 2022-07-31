import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { StripeSubscription } from './types.js'

type UpdateStripeSubscriptionOptions = Pick<
  StripeSubscription,
  'ID' | 'cancelAt' | 'canceledAt' | 'cancelAtPeriodEnd'
>

const updateStripeSubscription = async (
  pool: Pool,
  stripeSubscription: UpdateStripeSubscriptionOptions,
): Promise<void | Error> => {
  const row = await errorBoundary(async () =>
    db
      .update(
        'stripe_subscription',
        {
          updated_at: new Date(),
          cancel_at: stripeSubscription.cancelAt,
          canceled_at: stripeSubscription.canceledAt,
          cancel_at_period_end: stripeSubscription.cancelAtPeriodEnd,
        },
        {
          id: stripeSubscription.ID,
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }
}

export { updateStripeSubscription, UpdateStripeSubscriptionOptions }
