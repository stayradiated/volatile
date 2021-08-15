import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { ExchangeAsset } from './types.js'

const upsertExchangeAsset = async (
  pool: Pool,
  exchangeAsset: ExchangeAsset,
): Promise<void | Error> => {
  const now = DateTime.local().toJSDate()

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'exchange_asset',
        {
          exchange_uid: exchangeAsset.exchangeUID,
          asset_symbol: exchangeAsset.assetSymbol,
          created_at: now,
          updated_at: now,
        },
        ['exchange_uid', 'asset_symbol'],
        {
          updateColumns: ['updated_at'],
        },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertExchangeAsset }
