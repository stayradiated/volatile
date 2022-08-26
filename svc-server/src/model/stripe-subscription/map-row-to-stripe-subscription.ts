import type * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { StripeSubscription } from './types.js'

const mapRowToStripeSubscription = (
  row: s.stripe_subscription.JSONSelectable,
): StripeSubscription => {
  return {
    ID: row.id,
    createdAt: parseISO(row.created_at),
    updatedAt: parseISO(row.updated_at),
    customerID: row.customer_id,
    priceID: row.price_id,
    quantity: row.quantity,
    cancelAt: row.cancel_at ? parseISO(row.cancel_at) : undefined,
    canceledAt: row.canceled_at ? parseISO(row.canceled_at) : undefined,
    cancelAtPeriodEnd: row.cancel_at_period_end,
    currentPeriodStart: parseISO(row.current_period_start),
    currentPeriodEnd: parseISO(row.current_period_end),
    description: row.description ?? undefined,
    status: row.status,
  }
}

export { mapRowToStripeSubscription }
