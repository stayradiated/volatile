import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as dateFns from 'date-fns'

import type { Pool } from '../../types.js'
import type { CurrencyFx } from './types.js'

const upsertCurrencyFx = async (
  pool: Pool,
  options: CurrencyFx,
): Promise<void | Error> => {
  // Round timestamp down to nearest hour
  const timestamp = dateFns.set(options.timestamp, {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })

  const currencyFx: s.currency_fx.Insertable = {
    timestamp,
    from_symbol: options.fromSymbol,
    to_symbol: options.toSymbol,
    fx_rate: options.fxRate,
  }

  const error = await errorBoundary(async () =>
    db
      .upsert('currency_fx', currencyFx, db.constraint('currency_fx_pkey'), {
        updateColumns: ['fx_rate'],
        returning: [],
      })
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertCurrencyFx }
