import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { formatISO } from 'date-fns'

import type { Pool, BuySell } from '../../types.js'
import { mapRowToTrade } from './map-row-to-trade.js'

import type { Trade } from './types.js'

type SelectTradesAfterDateOptions = {
  userUid: string
  exchangeUid: string
  primaryCurrency: string
  secondaryCurrency: string
  type: BuySell
  afterDate: Date
}

const selectTradesAfterDate = async (
  pool: Pool,
  options: SelectTradesAfterDateOptions,
): Promise<Trade[] | Error> => {
  const {
    userUid,
    exchangeUid,
    primaryCurrency,
    secondaryCurrency,
    type,
    afterDate,
  } = options

  const rows = await errorBoundary(async () =>
    db
      .select('trade', {
        user_uid: userUid,
        exchange_uid: exchangeUid,
        primary_currency: primaryCurrency,
        secondary_currency: secondaryCurrency,
        type,
        timestamp: db.sql`${db.self} >= ${db.param(formatISO(afterDate))}`,
      })
      .run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToTrade(row))
}

export { selectTradesAfterDate }
