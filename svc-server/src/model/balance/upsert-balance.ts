import { randomUUID } from 'node:crypto'
import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import type { Pool } from '../../types.js'
import type { Balance } from './types.js'

type UpsertBalanceOptions = Except<Balance, 'uid'>

const equalNumber = (a: number, b: number) => a.toFixed(8) === b.toFixed(8)

const upsertBalance = async (
  pool: Pool,
  balance: UpsertBalanceOptions,
): Promise<string | Error> => {
  const previousBalance = await errorBoundary(async () =>
    db
      .selectOne(
        'balance',
        {
          user_uid: balance.userUid,
          exchange_uid: balance.exchangeUid,
          user_exchange_keys_uid: balance.userExchangeKeysUid,
          currency_symbol: balance.currencySymbol,
        },
        {
          limit: 1,
          order: { by: 'updated_at', direction: 'DESC' },
          columns: ['uid', 'total_balance', 'available_balance'],
        },
      )
      .run(pool),
  )

  if (previousBalance instanceof Error) {
    return previousBalance
  }

  const balanceHasChanged =
    typeof previousBalance === 'undefined' ||
    previousBalance === null ||
    !equalNumber(previousBalance.total_balance, balance.totalBalance) ||
    !equalNumber(previousBalance.available_balance, balance.availableBalance)

  const balanceUid = balanceHasChanged ? randomUUID() : previousBalance.uid

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'balance',
        {
          uid: balanceUid,
          created_at: balance.createdAt,
          updated_at: balance.updatedAt,
          user_uid: balance.userUid,
          exchange_uid: balance.exchangeUid,
          user_exchange_keys_uid: balance.userExchangeKeysUid,
          currency_symbol: balance.currencySymbol,
          total_balance: balance.totalBalance,
          available_balance: balance.availableBalance,
        },
        db.constraint('balance_pkey'),
        {
          updateColumns: ['updated_at', 'total_balance', 'available_balance'],
        },
      )
      .run(pool),
  )

  if (error instanceof Error) {
    return error
  }

  return balanceUid
}

export { upsertBalance }
