import { throwIfError } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import * as hash from '../../util/hash.js'

import {
  upsertUserDevice,
  UpsertUserDevicesOptions,
} from './upsert-user-device.js'

test('can insert a user device', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const input: UpsertUserDevicesOptions = {
    userUID,
    accessedAt: new Date(),
    name: 'Test Device',
    trusted: true,
    deviceID: 'my randomly generated device id',
  }

  await throwIfError<void>(upsertUserDevice(pool, input))

  const deviceIDHash = hash.sha256(input.deviceID)

  const row = await db
    .selectExactlyOne('user_device', {
      user_uid: userUID,
      device_id_hash: deviceIDHash,
    })
    .run(pool)

  t.like(row, {
    name: input.name,
    trusted: input.trusted,
    device_id_hash: deviceIDHash,
  })

  t.is(parseISO(row.accessed_at).valueOf(), input.accessedAt.valueOf())
})

test('can update a user device', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const deviceID = 'loudspeakerman'

  await throwIfError<void>(
    upsertUserDevice(pool, {
      userUID,
      accessedAt: parseISO('2000-01-01'),
      name: 'Test Device A',
      trusted: false,
      deviceID,
    }),
  )

  await throwIfError<void>(
    upsertUserDevice(pool, {
      userUID,
      accessedAt: parseISO('2020-02-02'),
      name: 'Test Device B',
      trusted: true,
      deviceID,
    }),
  )

  const deviceIDHash = hash.sha256(deviceID)

  const row = await db
    .selectExactlyOne('user_device', {
      user_uid: userUID,
      device_id_hash: deviceIDHash,
    })
    .run(pool)

  t.like(row, {
    name: 'Test Device B',
    trusted: true,
    device_id_hash: deviceIDHash,
  })

  t.is(parseISO(row.accessed_at).valueOf(), parseISO('2020-02-02').valueOf())
})
