import { randomUUID } from 'node:crypto'
import { throwIfError, throwIfValue } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectUserDeviceByID } from './select-user-device-by-id.js'
import {
  upsertUserDevice,
  UpsertUserDevicesOptions,
} from './upsert-user-device.js'

import type { UserDeviceMasked } from './types.js'

test('can find a device by its device ID', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()

  const deviceID = `${randomUUID()}-orangutan`

  const input: UpsertUserDevicesOptions = {
    userUid,
    accessedAt: new Date(),
    name: 'Special Test Device',
    trusted: true,
    deviceID,
  }

  await throwIfError<string>(upsertUserDevice(pool, input))

  const userDevice = await throwIfError<UserDeviceMasked>(
    selectUserDeviceByID(pool, deviceID),
  )

  t.is(input.accessedAt.valueOf(), userDevice.accessedAt.valueOf())
  t.is(input.name, userDevice.name)
  t.is(input.trusted, userDevice.trusted)
})

test('should handle missing device', async (t) => {
  const { pool } = t.context
  const deviceID = `${randomUUID()}-weddingherb`
  const error = await throwIfValue(selectUserDeviceByID(pool, deviceID))

  t.is(error.message, `E_DB: Could not find user device.`)
})
