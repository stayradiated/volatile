import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import type { Pool } from '../../types.js'
import type { StripePrice } from './types.js'

type UpsertStripePriceOptions = StripePrice

const upsertStripePrice = async (
  pool: Pool,
  stripePrice: UpsertStripePriceOptions,
): Promise<StripePrice | Error> => {
  const row = await errorBoundary(async () =>
    db
      .upsert(
        'stripe_price',
        {
          id: stripePrice.ID,
          created_at: stripePrice.createdAt,
          updated_at: stripePrice.updatedAt,
          product_id: stripePrice.productID,
          active: stripePrice.active,
          billing_scheme: stripePrice.billingScheme,
          unit_amount: stripePrice.unitAmount,
          currency: stripePrice.currency,
          nickname: stripePrice.nickname,
          type: stripePrice.type,
          recurring_aggregate_usage: stripePrice.recurring?.aggregateUsage,
          recurring_interval: stripePrice.recurring?.interval,
          recurring_interval_count: stripePrice.recurring?.intervalCount,
          recurring_usage_type: stripePrice.recurring?.usageType,
        },
        db.constraint('stripe_price_pkey'),
        {
          updateColumns: [
            'updated_at',
            'active',
            'billing_scheme',
            'unit_amount',
            'currency',
            'nickname',
            'type',
            'recurring_aggregate_usage',
            'recurring_interval',
            'recurring_interval_count',
            'recurring_usage_type',
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
    ...stripePrice,
    createdAt: parseISO(row.created_at),
  }
}

export { upsertStripePrice, type UpsertStripePriceOptions }
