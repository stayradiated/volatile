import { assertOk } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import * as hash from '../../util/hash.js'

import type { UpsertUserDevicesOptions } from './upsert-user-device.js'
import { upsertUserDevice } from './upsert-user-device.js'

test('can insert a user device', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const input: UpsertUserDevicesOptions = {
    userUid,
    accessedAt: new Date(),
    name: 'Test Device',
    trusted: true,
    deviceId: 'my randomly generated device id',
  }

  const userDeviceUid = await upsertUserDevice(pool, input)
  assertOk(userDeviceUid)
  t.is(typeof userDeviceUid, 'string')

  const deviceIdHash = hash.sha256(input.deviceId)

  const row = await db
    .selectExactlyOne('user_device', {
      user_uid: userUid,
      device_id_hash: deviceIdHash,
    })
    .run(pool)

  t.like(row, {
    name: input.name,
    trusted: input.trusted,
    device_id_hash: deviceIdHash,
  })

  t.is(parseISO(row.accessed_at).valueOf(), input.accessedAt.valueOf())
})

test('can update a user device', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const deviceId = 'loudspeakerman'

  const userDeviceAUid = await upsertUserDevice(pool, {
    userUid,
    accessedAt: parseISO('2000-01-01'),
    name: 'Test Device A',
    trusted: false,
    deviceId,
  })
  assertOk(userDeviceAUid)

  const userDeviceBUid = await upsertUserDevice(pool, {
    userUid,
    accessedAt: parseISO('2020-02-02'),
    name: 'Test Device B',
    trusted: true,
    deviceId,
  })
  assertOk(userDeviceBUid)

  t.is(userDeviceAUid, userDeviceBUid)

  const deviceIdHash = hash.sha256(deviceId)

  const row = await db
    .selectExactlyOne('user_device', {
      user_uid: userUid,
      device_id_hash: deviceIdHash,
    })
    .run(pool)

  t.like(row, {
    name: 'Test Device B',
    trusted: true,
    device_id_hash: deviceIdHash,
  })

  t.is(parseISO(row.accessed_at).valueOf(), parseISO('2020-02-02').valueOf())
})
