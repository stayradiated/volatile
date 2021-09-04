import { DateTime } from 'luxon'
import * as s from 'zapatos/schema'

import type { DCAOrder } from './types.js'

const mapRowToDCAOrder = (row: s.dca_order.JSONSelectable): DCAOrder => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  userExchangeKeysUID: row.user_exchange_keys_uid,
  marketUID: row.market_uid,
  primaryCurrency: row.primary_currency,
  secondaryCurrency: row.secondary_currency,
  startAt: DateTime.fromISO(row.start_at),
  marketOffset: row.market_offset,
  dailyAverage: row.daily_average,
  minPrice: row.min_price ?? undefined,
  maxPrice: row.max_price ?? undefined,
  minValue: row.min_value ?? undefined,
  maxValue: row.max_value ?? undefined,
  enabledAt: row.enabled_at ? DateTime.fromISO(row.enabled_at) : undefined,
})

export { mapRowToDCAOrder }
