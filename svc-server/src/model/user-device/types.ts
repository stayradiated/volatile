import type { Except } from 'type-fest'

type UserDevice = {
  uid: string
  accessedAt: Date
  userUid: string
  name: string
  deviceId: string
  trusted: boolean
}

type UserDeviceMasked = Except<UserDevice, 'deviceId'>

export { UserDevice, UserDeviceMasked }
