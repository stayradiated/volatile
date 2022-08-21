import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { untrustAllUserDevices } from './untrust-all-user-devices.js'

test('should untrust all user devices', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()

  const untrustedDeviceUid = await make.userDevice({ trusted: false })
  const trustedDeviceUid = await make.userDevice({ trusted: true })

  const deviceuids = await throwIfError<string[]>(
    untrustAllUserDevices(pool, { userUid }),
  )

  t.true(deviceuids.includes(trustedDeviceUid))
  t.false(deviceuids.includes(untrustedDeviceUid))
  t.is(deviceuids.length, 1)
})
