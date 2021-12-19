import type { DateTime } from 'luxon'
import type { Except } from 'type-fest'

type UserDevice = {
  UID: string
  accessedAt: DateTime
  userUID: string
  name: string
  deviceID: string
  trusted: boolean
}

type UserDeviceMasked = Except<UserDevice, 'deviceID'>

export { UserDevice, UserDeviceMasked }
