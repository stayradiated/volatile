import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { Asset } from './types.js'

const upsertAsset = async (pool: Pool, asset: Asset): Promise<void | Error> => {
  const now = DateTime.local().toJSDate()

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'asset',
        {
          symbol: asset.symbol,
          created_at: now,
          updated_at: now,
          name: asset.name,
        },
        ['symbol'],
        {
          updateColumns: ['updated_at', 'name'],
        },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertAsset }
