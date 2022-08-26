import type * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { DcaOrder } from './types.js'

const mapRowToDcaOrder = (row: s.dca_order.JSONSelectable): DcaOrder => ({
  uid: row.uid,
  userUid: row.user_uid,
  exchangeUid: row.exchange_uid,
  userExchangeKeysUid: row.user_exchange_keys_uid,
  marketUid: row.market_uid,
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

export { mapRowToDcaOrder }
