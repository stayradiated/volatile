import { assertOk } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { test } from '../../test-util/ava.js'

import { insertUserExchangeKeys, getUserExchangeKeys } from './index.js'

test('insertUserExchangeKey: should write to user_exchange_keys', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  const result = await insertUserExchangeKeys(pool, {
    userUid,
    exchangeUid,
    keys,
    description,
    invalidatedAt: undefined,
  })
  assertOk(result)

  t.is('string', typeof result.uid)
  t.like(result, {
    userUid,
    exchangeUid,
    keys,
    description,
    invalidatedAt: undefined,
  })

  const rows = await db.sql<
    s.user_exchange_keys.SQL,
    s.user_exchange_keys.Selectable[]
  >`
    SELECT * FROM ${'user_exchange_keys'}
      WHERE ${{ uid: result.uid }}
  `.run(pool)
  t.is(rows.length, 1)
  const row = rows[0]!

  t.is('string', typeof row.uid)
  t.true(row.created_at instanceof Date)
  t.true(row.updated_at instanceof Date)
  t.is(userUid, row.user_uid)
  t.is(exchangeUid, row.exchange_uid)
  t.is('number', typeof row.keys_keyring_id)
  t.is('string', typeof row.keys_encrypted)
  t.is('string', typeof row.keys_hash)
  t.is(description, row.description)
  t.is(row.invalidated_at, null)
})

test('getUserExchangeKey: should read from user_exchange_keys', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  const userExchangeKeys = await insertUserExchangeKeys(pool, {
    userUid,
    exchangeUid,
    keys,
    description,
    invalidatedAt: undefined,
  })
  assertOk(userExchangeKeys)

  const result = await getUserExchangeKeys(pool, userExchangeKeys.uid)
  assertOk(result)

  t.is(typeof result.uid, 'string')
  t.is(result.userUid, userUid)
  t.is(exchangeUid, result.exchangeUid)
  t.deepEqual(result.keys, keys)
  t.is(result.description, description)
  t.is(result.invalidatedAt, undefined)
})
