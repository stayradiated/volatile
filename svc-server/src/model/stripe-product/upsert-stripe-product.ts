import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import type { Pool } from '../../types.js'
import type { StripeProduct } from './types.js'

type UpsertStripeProductOptions = StripeProduct

const upsertStripeProduct = async (
  pool: Pool,
  stripeProduct: UpsertStripeProductOptions,
): Promise<StripeProduct | Error> => {
  const row = await errorBoundary(async () =>
    db
      .upsert(
        'stripe_product',
        {
          id: stripeProduct.ID,
          created_at: stripeProduct.createdAt,
          updated_at: stripeProduct.updatedAt,
          active: stripeProduct.active,
          name: stripeProduct.name,
          description: stripeProduct.description,
        },
        db.constraint('stripe_product_pkey'),
        {
          updateColumns: ['updated_at', 'active', 'name', 'description'],
          returning: ['id', 'created_at'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...stripeProduct,
    createdAt: parseISO(row.created_at),
  }
}

export { upsertStripeProduct, UpsertStripeProductOptions }
