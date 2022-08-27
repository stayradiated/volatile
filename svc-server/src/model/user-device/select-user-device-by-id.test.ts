import { randomUUID } from 'node:crypto'
import { assertOk, assertError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectUserDeviceByID } from './select-user-device-by-id.js'
import type { UpsertUserDevicesOptions } from './upsert-user-device.js'
import { upsertUserDevice } from './upsert-user-device.js'

test('can find a device by its device ID', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const deviceId = `${randomUUID()}-orangutan`

  const input: UpsertUserDevicesOptions = {
    userUid,
    accessedAt: new Date(),
    name: 'Special Test Device',
    trusted: true,
    deviceId,
  }

  assertOk(await upsertUserDevice(pool, input))

  const userDevice = await selectUserDeviceByID(pool, deviceId)
  assertOk(userDevice)

  t.is(input.accessedAt.valueOf(), userDevice.accessedAt.valueOf())
  t.is(input.name, userDevice.name)
  t.is(input.trusted, userDevice.trusted)
})

test('should handle missing device', async (t) => {
  const { pool } = t.context
  const deviceId = `${randomUUID()}-weddingherb`
  const error = await selectUserDeviceByID(pool, deviceId)
  assertError(error)

  t.is(error.message, `Could not find user device.`)
})
