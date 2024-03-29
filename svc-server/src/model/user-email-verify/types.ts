import type { Except } from 'type-fest'

type UserEmailVerify = {
  uid: string
  userUid: string
  secret: string
}

type UserEmailVerifyMasked = Except<UserEmailVerify, 'secret'>

export type { UserEmailVerify, UserEmailVerifyMasked }
