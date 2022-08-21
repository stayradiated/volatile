import { throwIfError } from '@stayradiated/error-boundary'
import db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { upsertBalance } from './upsert-balance.js'

test('should insert new balance', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const currencySymbol = await make.secondaryCurrency()

  const balance = {
    createdAt: new Date(),
    updatedAt: new Date(),
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    currencySymbol,
    totalBalance: 123_456.78,
    availableBalance: 777.77,
  }

  const balanceUid = await throwIfError<string>(upsertBalance(pool, balance))

  const row = await throwIfError(
    db.selectExactlyOne('balance', { uid: balanceUid }).run(pool),
  )
  t.like(row, {
    uid: balanceUid,
    user_uid: balance.userUid,
    exchange_uid: balance.exchangeUid,
    currency_symbol: balance.currencySymbol,
    total_balance: balance.totalBalance,
    available_balance: balance.availableBalance,
  })
  t.is(parseISO(row.created_at).valueOf(), balance.createdAt.valueOf())
  t.is(parseISO(row.updated_at).valueOf(), balance.updatedAt.valueOf())
})

test('should update existing balance', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const userExchangeKeysUid = await make.userExchangeKeys()
  const currencySymbol = await make.secondaryCurrency()

  const balance = {
    createdAt: new Date(),
    updatedAt: new Date(),
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    currencySymbol,
    totalBalance: 123_456_789.123_456_78,
    availableBalance: 777.000_000_01,
  }

  const existingBalanceUid = await make.balance(balance)

  const balanceUid = await throwIfError<string>(upsertBalance(pool, balance))

  t.is(existingBalanceUid, balanceUid)

  const row = await throwIfError(
    db.selectExactlyOne('balance', { uid: balanceUid }).run(pool),
  )
  t.like(row, {
    uid: balanceUid,
    user_uid: balance.userUid,
    exchange_uid: balance.exchangeUid,
    currency_symbol: balance.currencySymbol,
    total_balance: balance.totalBalance,
    available_balance: balance.availableBalance,
  })
  t.is(parseISO(row.created_at).valueOf(), balance.createdAt.valueOf())
  t.is(parseISO(row.updated_at).valueOf(), balance.updatedAt.valueOf())
})
