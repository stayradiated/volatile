import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'
import { formatISO, fromUnixTime } from 'date-fns'
import { historical } from '@volatile/open-exchange-rates-api'

import { config } from '../../env.js'

import { UnexpectedError, messageWithContext } from '../../util/error.js'

import { insertRequest } from '../request/index.js'

import type { Pool } from '../../types.js'
import { upsertCurrencyFx } from './upsert-currency-fx.js'

type SyncCurrencyFxOptions = {
  startDate: Date
  endDate: Date
  fromSymbol: string
  toSymbol: string
}

type ResultSQL = {
  i: Date
}

const syncCurrencyFx = async (
  pool: Pool,
  options: SyncCurrencyFxOptions,
): Promise<
  | {
      count: number
    }
  | Error
> => {
  const { fromSymbol, toSymbol } = options
  const startDate = formatISO(options.startDate)
  const endDate = formatISO(options.endDate)

  const rows = await errorBoundary(async () =>
    db.sql<s.currency_fx.SQL, ResultSQL[]>`
    WITH date_range AS (
      SELECT i::date
      FROM GENERATE_SERIES(
        ${db.param(startDate)},
        ${db.param(endDate)},
        '1 day'::interval
      ) i
    )
    SELECT * FROM date_range
    WHERE NOT EXISTS (
      SELECT true
      FROM ${'currency_fx'}
      WHERE
        ${'timestamp'}::date = date_range.i
        AND ${'from_symbol'} = ${db.param(options.fromSymbol)}
        AND ${'to_symbol'} = ${db.param(options.toSymbol)}
    )
  `.run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      rows.map(async (row): Promise<void | Error> => {
        const date = row.i

        const [result, raw] = await historical({
          config: { appId: config.OPEN_EXCHANGE_RATES_APP_ID },
          date,
          base: 'USD', // Free tier only supports USD
          symbols: [fromSymbol, toSymbol],
        })
        if (raw) {
          const insertRequestError = await insertRequest(pool, raw.redacted())
          if (insertRequestError instanceof Error) {
            return insertRequestError
          }
        }

        if (result instanceof Error) {
          return result
        }

        const toRate = result.rates[toSymbol] ?? Number.NaN
        const fromRate = result.rates[fromSymbol] ?? Number.NaN
        const fxRate = toRate / fromRate

        if (typeof fxRate !== 'number' || Number.isNaN(fxRate)) {
          return new UnexpectedError(
            messageWithContext(`Could not get ${fromSymbol}→${toSymbol} rate`, {
              fromSymbol,
              fromRate,
              toSymbol,
              toRate,
              fxRate,
            }),
          )
        }

        const upsertResult = await upsertCurrencyFx(pool, {
          timestamp: fromUnixTime(result.timestamp),
          fromSymbol,
          toSymbol,
          fxRate,
        })
        if (upsertResult instanceof Error) {
          return upsertResult
        }

        return undefined
      }),
    ),
  )

  if (error instanceof Error) {
    return error
  }

  return { count: rows.length }
}

export { syncCurrencyFx }
