import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'
import Stripe from 'stripe'

import type { Pool } from '../../types.js'

import { stripe } from '../../util/stripe.js'
import { upsertStripeProduct } from '../../model/stripe-product/index.js'

const fetchStripeProducts = async (pool: Pool) => {
  const products = await errorBoundary(async () => {
    const all: Stripe.Product[] = []
    for await (const product of stripe.products.list()) {
      all.push(product)
    }

    return all
  })
  if (products instanceof Error) {
    return products
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      products.map(async (product) => {
        return upsertStripeProduct(pool, {
          ID: product.id,
          createdAt: fromUnixTime(product.created),
          updatedAt: new Date(),
          active: product.active,
          name: product.name,
          description: product.description ?? undefined,
        })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return `Successfully fetched ${products.length} product(s).`
}

export { fetchStripeProducts }
