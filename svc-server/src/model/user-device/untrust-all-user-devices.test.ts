import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { untrustAllUserDevices } from './untrust-all-user-devices.js'

test('should untrust all user devices', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()

  const untrustedDeviceUID = await make.userDevice({ trusted: false })
  const trustedDeviceUID = await make.userDevice({ trusted: true })

  const deviceUIDs = await throwIfError<string[]>(
    untrustAllUserDevices(pool, { userUID }),
  )

  t.true(deviceUIDs.includes(trustedDeviceUID))
  t.false(deviceUIDs.includes(untrustedDeviceUID))
  t.is(deviceUIDs.length, 1)
})
