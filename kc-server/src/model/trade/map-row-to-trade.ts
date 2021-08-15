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
  assetSymbol: row.asset_symbol,
  amount: row.amount,
  priceNZD: row.price_nzd,
  totalNZD: row.total_nzd,
  feeNZD: row.fee_nzd,
})

export { mapRowToTrade }
