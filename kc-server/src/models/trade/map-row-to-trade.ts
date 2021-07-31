import { DateTime } from 'luxon'
import type * as s from 'zapatos/schema'

import type { CryptoSymbol } from '../../types.js'
import type { Trade } from './types.js'

const mapRowToTrade = (row: s.trade.JSONSelectable): Trade => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  orderUID: row.order_uid ? row.order_uid : undefined,
  timestamp: DateTime.fromISO(row.timestamp),
  ID: row.id,
  type: row.type,
  symbol: row.symbol as CryptoSymbol,
  amount: row.amount,
  priceNZD: row.price_nzd,
  totalNZD: row.total_nzd,
  feeNZD: row.fee_nzd,
})

export { mapRowToTrade }
