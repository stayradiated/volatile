import type { Except } from 'type-fest'

type UserDevice = {
  uid: string
  accessedAt: Date
  userUid: string
  name: string
  deviceID: string
  trusted: boolean
}

type UserDeviceMasked = Except<UserDevice, 'deviceID'>

export { UserDevice, UserDeviceMasked }
