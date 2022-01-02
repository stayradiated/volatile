import { throwIfError } from '@stayradiated/error-boundary'
import db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { upsertBalance } from './upsert-balance.js'

test('should insert new balance', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const currencySymbol = await make.secondaryCurrency()

  const balance = {
    createdAt: new Date(),
    updatedAt: new Date(),
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    currencySymbol,
    totalBalance: 123_456.78,
    availableBalance: 777.77,
  }

  const balanceUID = await throwIfError<string>(upsertBalance(pool, balance))

  const row = await throwIfError(
    db.selectExactlyOne('balance', { uid: balanceUID }).run(pool),
  )
  t.like(row, {
    uid: balanceUID,
    user_uid: balance.userUID,
    exchange_uid: balance.exchangeUID,
    currency_symbol: balance.currencySymbol,
    total_balance: balance.totalBalance,
    available_balance: balance.availableBalance,
  })
  t.is(parseISO(row.created_at).valueOf(), balance.createdAt.valueOf())
  t.is(parseISO(row.updated_at).valueOf(), balance.updatedAt.valueOf())
})

test('should update existing balance', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const userExchangeKeysUID = await make.userExchangeKeys()
  const currencySymbol = await make.secondaryCurrency()

  const balance = {
    createdAt: new Date(),
    updatedAt: new Date(),
    userUID,
    exchangeUID,
    userExchangeKeysUID,
    currencySymbol,
    totalBalance: 123_456.78,
    availableBalance: 777.77,
  }

  const existingBalanceUID = await make.balance(balance)

  const balanceUID = await throwIfError<string>(upsertBalance(pool, balance))

  t.is(existingBalanceUID, balanceUID)

  const row = await throwIfError(
    db.selectExactlyOne('balance', { uid: balanceUID }).run(pool),
  )
  t.like(row, {
    uid: balanceUID,
    user_uid: balance.userUID,
    exchange_uid: balance.exchangeUID,
    currency_symbol: balance.currencySymbol,
    total_balance: balance.totalBalance,
    available_balance: balance.availableBalance,
  })
  t.is(parseISO(row.created_at).valueOf(), balance.createdAt.valueOf())
  t.is(parseISO(row.updated_at).valueOf(), balance.updatedAt.valueOf())
})
