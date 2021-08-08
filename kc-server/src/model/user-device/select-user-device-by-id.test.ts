import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'
import { test } from '../../test-util/ava.js'

import { selectUserDeviceByID } from './select-user-device-by-id.js'
import {
  upsertUserDevice,
  UpsertUserDevicesOptions,
} from './upsert-user-device.js'

import type { UserDeviceMasked } from './types.js'

test('can find a device by its device ID', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()

  const deviceID = 'cometorangutan'

  const input: UpsertUserDevicesOptions = {
    userUID,
    accessedAt: DateTime.local(),
    name: 'Special Test Device',
    trusted: true,
    deviceID,
  }

  await throwIfError<void>(upsertUserDevice(pool, input))

  const userDevice = await throwIfError<UserDeviceMasked>(
    selectUserDeviceByID(pool, deviceID),
  )

  t.is(input.accessedAt.valueOf(), userDevice.accessedAt.valueOf())
  t.is(input.name, userDevice.name)
  t.is(input.trusted, userDevice.trusted)
})

test('should handle missing device', async (t) => {
  const { pool } = t.context
  const deviceID = 'weddingherb'
  const error = await selectUserDeviceByID(pool, deviceID)
  if (!(error instanceof Error)) {
    t.fail(`Expected selectUserDeviceByID to fail, but it didn't!`)
    return
  }

  t.is(
    error.message,
    `Could not find user device. | deviceIDHash='RfvFueNUJken/fQTkJsvkCaio5L/NK2Hh8SeVwp4uWc='`,
  )
})
