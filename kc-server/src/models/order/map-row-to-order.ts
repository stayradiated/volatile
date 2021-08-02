import { DateTime } from 'luxon'
import type * as s from 'zapatos/schema'

import type { BuySell } from '../../types.js'
import type { Order } from './types.js'

const mapRowToOrder = (row: s.order.JSONSelectable): Order => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  orderID: row.order_id,
  symbol: row.symbol,
  priceNZD: row.price_nzd,
  amount: row.amount,
  type: row.type as BuySell,
  openedAt: DateTime.fromISO(row.opened_at),
  closedAt: row.closed_at ? DateTime.fromISO(row.closed_at) : undefined,
})

export { mapRowToOrder }
