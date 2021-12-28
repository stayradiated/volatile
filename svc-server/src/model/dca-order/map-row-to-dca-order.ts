import * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { DCAOrder } from './types.js'

const mapRowToDCAOrder = (row: s.dca_order.JSONSelectable): DCAOrder => ({
  UID: row.uid,
  userUID: row.user_uid,
  exchangeUID: row.exchange_uid,
  userExchangeKeysUID: row.user_exchange_keys_uid,
  marketUID: row.market_uid,
  primaryCurrency: row.primary_currency_symbol,
  secondaryCurrency: row.secondary_currency_symbol,
  startAt: parseISO(row.start_at),
  marketOffset: row.market_offset,
  dailyAverage: row.daily_average,
  intervalMs: row.interval_ms,
  minPrice: row.min_price ?? undefined,
  maxPrice: row.max_price ?? undefined,
  minValue: row.min_value ?? undefined,
  maxValue: row.max_value ?? undefined,
  enabledAt: row.enabled_at ? parseISO(row.enabled_at) : undefined,
  nextRunAt: row.next_run_at ? parseISO(row.next_run_at) : undefined,
  lastRunAt: row.last_run_at ? parseISO(row.last_run_at) : undefined,
})

export { mapRowToDCAOrder }
