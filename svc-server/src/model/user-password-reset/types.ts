import type { Except } from 'type-fest'

type UserPasswordReset = {
  uid: string
  expiresAt: Date
  userUid: string
  secret: string
}

type UserPasswordResetMasked = Except<UserPasswordReset, 'secret'>

export type { UserPasswordReset, UserPasswordResetMasked }
