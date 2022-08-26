import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { StripePrice } from './types.js'

type DeleteStripePriceOptions = Pick<StripePrice, 'ID'>

const deleteStripePrice = async (
  pool: Pool,
  stripePrice: DeleteStripePriceOptions,
): Promise<void | Error> => {
  const row = await errorBoundary(async () =>
    db
      .deletes('stripe_price', {
        id: stripePrice.ID,
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return undefined
}

export { deleteStripePrice, type DeleteStripePriceOptions }
