import type { Except } from 'type-fest'

type UserPasswordReset = {
  UID: string
  expiresAt: Date
  userUID: string
  secret: string
}

type UserPasswordResetMasked = Except<UserPasswordReset, 'secret'>

export { UserPasswordReset, UserPasswordResetMasked }
