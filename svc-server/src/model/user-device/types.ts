import type { Except } from 'type-fest'

type UserDevice = {
  UID: string
  accessedAt: Date
  userUID: string
  name: string
  deviceID: string
  trusted: boolean
}

type UserDeviceMasked = Except<UserDevice, 'deviceID'>

export { UserDevice, UserDeviceMasked }
