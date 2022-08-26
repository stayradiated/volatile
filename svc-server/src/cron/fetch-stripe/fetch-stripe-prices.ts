import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'
import type Stripe from 'stripe'

import type { Pool } from '../../types.js'

import { stripe } from '../../util/stripe.js'
import { upsertStripePrice } from '../../model/stripe-price/index.js'

const fetchStripePrices = async (pool: Pool) => {
  const prices = await errorBoundary(async () => {
    const all: Stripe.Price[] = []
    for await (const price of stripe.prices.list()) {
      all.push(price)
    }

    return all
  })
  if (prices instanceof Error) {
    return prices
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      prices.map(async (price) => {
        return upsertStripePrice(pool, {
          ID: price.id,
          createdAt: fromUnixTime(price.created),
          updatedAt: new Date(),
          productID: String(price.product),
          active: price.active,
          billingScheme: price.billing_scheme,
          unitAmount: price.unit_amount ?? undefined,
          currency: price.currency,
          nickname: price.nickname ?? undefined,
          type: price.type,
          recurring: price.recurring
            ? {
                aggregateUsage: price.recurring.aggregate_usage ?? undefined,
                interval: price.recurring.interval,
                intervalCount: price.recurring.interval_count,
                usageType: price.recurring.usage_type,
              }
            : undefined,
        })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return `Successfully fetched ${prices.length} price(s).`
}

export { fetchStripePrices }
