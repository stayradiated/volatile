import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { untrustAllUserDevices } from './untrust-all-user-devices.js'

test('should untrust all user devices', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()

  const untrustedDeviceUid = await make.userDevice({ trusted: false })
  const trustedDeviceUid = await make.userDevice({ trusted: true })

  const deviceUids = await untrustAllUserDevices(pool, { userUid })
  assertOk(deviceUids)

  t.true(deviceUids.includes(trustedDeviceUid))
  t.false(deviceUids.includes(untrustedDeviceUid))
  t.is(deviceUids.length, 1)
})
