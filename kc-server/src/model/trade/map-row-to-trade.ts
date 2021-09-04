import { DateTime } from 'luxon'
import type * as s from 'zapatos/schema'

import type { BuySell } from '../../types.js'
import type { Trade } from './types.js'

const mapRowToTrade = (row: s.trade.JSONSelectable): Trade => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  orderUID: row.order_uid ? row.order_uid : undefined,
  timestamp: DateTime.fromISO(row.timestamp),
  tradeID: row.trade_id,
  type: row.type as BuySell,
  primaryCurrency: row.primary_currency,
  secondaryCurrency: row.secondary_currency,
  volume: row.volume,
  price: row.price,
  value: row.value,
  fee: row.fee,
})

export { mapRowToTrade }
