import type { DateTime } from 'luxon'
import type { Except } from 'type-fest'

type UserPasswordReset = {
  UID: string
  expiresAt: DateTime
  userUID: string
  secret: string
}

type UserPasswordResetMasked = Except<UserPasswordReset, 'secret'>

export { UserPasswordReset, UserPasswordResetMasked }
