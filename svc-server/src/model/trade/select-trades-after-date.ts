import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { DateTime } from 'luxon'

import type { Pool, BuySell } from '../../types.js'
import { mapRowToTrade } from './map-row-to-trade.js'

import type { Trade } from './types.js'

type SelectTradesAfterDateOptions = {
  userUID: string
  exchangeUID: string
  primaryCurrency: string
  secondaryCurrency: string
  type: BuySell
  afterDate: DateTime
}

const selectTradesAfterDate = async (
  pool: Pool,
  options: SelectTradesAfterDateOptions,
): Promise<Trade[] | Error> => {
  const {
    userUID,
    exchangeUID,
    primaryCurrency,
    secondaryCurrency,
    type,
    afterDate,
  } = options

  const rows = await errorBoundary(async () =>
    db
      .select('trade', {
        user_uid: userUID,
        exchange_uid: exchangeUID,
        primary_currency: primaryCurrency,
        secondary_currency: secondaryCurrency,
        type,
        timestamp: db.sql`${db.self} >= ${db.param(afterDate.toISO())}`,
      })
      .run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToTrade(row))
}

export { selectTradesAfterDate }
