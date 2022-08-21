import { parseISO } from 'date-fns'
import type * as s from 'zapatos/schema'

import type { BuySell } from '../../types.js'
import type { Trade } from './types.js'

const mapRowToTrade = (row: s.trade.JSONSelectable): Trade => ({
  uid: row.uid,
  userUid: row.user_uid,
  exchangeUid: row.exchange_uid,
  orderUid: row.order_uid ? row.order_uid : undefined,
  timestamp: parseISO(row.timestamp),
  tradeID: row.trade_id,
  type: row.type as BuySell,
  primaryCurrency: row.primary_currency,
  secondaryCurrency: row.secondary_currency,
  volume: row.volume,
  price: row.price,
  value: row.value,
  fee: row.fee,
  totalValue: row.total_value,
})

export { mapRowToTrade }
