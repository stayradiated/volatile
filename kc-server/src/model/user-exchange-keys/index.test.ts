import { inspect } from 'util'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import test from '../../test-utils/ava.js'

import { insertUserExchangeKeys, getUserExchangeKeys } from './index.js'

test('insertUserExchangeKey: should write to user_exchange_keys', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  const result = await insertUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
    keys,
    description,
    invalidatedAt: undefined,
  })

  if (result instanceof Error) {
    t.fail(inspect(result))
    return
  }

  t.is('string', typeof result.UID)
  t.like(result, {
    userUID,
    exchangeUID,
    keys,
    description,
    invalidatedAt: undefined,
  })

  const rows = await db.sql<
    s.user_exchange_keys.SQL,
    s.user_exchange_keys.Selectable[]
  >`
    SELECT * FROM ${'user_exchange_keys'}
      WHERE ${{ uid: result.UID }}
  `.run(pool)
  t.is(rows.length, 1)
  const row = rows[0]!

  t.is('string', typeof row.uid)
  t.true(row.created_at instanceof Date)
  t.true(row.updated_at instanceof Date)
  t.is(userUID, row.user_uid)
  t.is(exchangeUID, row.exchange_uid)
  t.is('number', typeof row.keys_keyring_id)
  t.is('string', typeof row.keys_encrypted)
  t.is('string', typeof row.keys_hash)
  t.is(description, row.description)
  t.is(null, row.invalidated_at)
})

test('getUserExchangeKey: should read from user_exchange_keys', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  const userExchangeKeys = await insertUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (userExchangeKeys instanceof Error) {
    t.fail(inspect(userExchangeKeys))
    return
  }

  const result = await getUserExchangeKeys(pool, userExchangeKeys.UID)
  if (result instanceof Error) {
    t.fail(inspect(result))
    return
  }

  t.is('string', typeof result.UID)
  t.is(userUID, result.userUID)
  t.is(exchangeUID, result.exchangeUID)
  t.deepEqual(keys, result.keys)
  t.is(description, result.description)
  t.is(undefined, result.invalidatedAt)
})
