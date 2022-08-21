import { parseISO } from 'date-fns'
import type * as s from 'zapatos/schema'

import type { BuySell } from '../../types.js'
import type { Order } from './types.js'

const mapToDateTime = (input: string | Date): Date => {
  if (typeof input === 'string') {
    return parseISO(input)
  }

  return input
}

const mapRowToOrder = (
  row: s.order.Selectable | s.order.JSONSelectable,
): Order => ({
  uid: row.uid,
  userUid: row.user_uid,
  exchangeUid: row.exchange_uid,
  orderId: row.order_id,
  primaryCurrency: row.primary_currency,
  secondaryCurrency: row.secondary_currency,
  price: row.price,
  volume: row.volume,
  value: row.value,
  type: row.type as BuySell,
  openedAt: mapToDateTime(row.opened_at),
  closedAt: row.closed_at ? mapToDateTime(row.closed_at) : undefined,
})

export { mapRowToOrder }
