import { Except } from 'type-fest'

type UserEmailVerify = {
  UID: string
  userUID: string
  secret: string
}

type UserEmailVerifyMasked = Except<UserEmailVerify, 'secret'>

export { UserEmailVerify, UserEmailVerifyMasked }
