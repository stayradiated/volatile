import { inspect } from 'util'
import anyTest, { TestInterface } from 'ava'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { createUser } from '../user/index.js'
import { getExchangeUID } from '../exchange/index.js'
import { pool } from '../../pool.js'
import { setUserExchangeKeys, getUserExchangeKeys } from './index.js'

const test = anyTest as TestInterface<{
  userUID: string
}>

test.before(async (t) => {
  const user = await createUser(pool, {
    email: 'user-exchange-keys@domain',
    password: 'johnny flynn',
  })
  if (user instanceof Error) {
    t.fail(inspect(user))
    return
  }

  t.context = {
    userUID: user.UID,
  }
})

test('setUserExchangeKey: should write to user_exchange_keys', async (t) => {
  const { userUID } = t.context

  const exchangeUID = await getExchangeUID(pool, {
    id: 'setUserExchangeKey',
    name: 'setUserExchangeKey',
  })

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  const result = await setUserExchangeKeys(pool, {
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
  const { userUID } = t.context

  const exchangeUID = await getExchangeUID(pool, {
    id: 'getUserExchangeKey',
    name: 'getUserExchangeKey',
  })

  const keys = {
    a: 'YFTgSUE4GkCWECIPtheshijlHwrknwWkkxDGJBm3UjY=',
    b: 'kpxXIaoncSXXSzhL4EaWhNihHqGXpGxDwsmCp5h3aHY=',
  }

  const description = 'Randomly generated keys for this test'

  {
    const result = await setUserExchangeKeys(pool, {
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
  }

  const result = await getUserExchangeKeys(pool, { userUID, exchangeUID })
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
