import { formatISO } from 'date-fns'

import { AuthError } from '../../util/error.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  selectUserPasswordResetBySecret,
  deleteUserPasswordReset,
} from '../../model/user-password-reset/index.js'
import { updateUser } from '../../model/user/index.js'
import { generateAuthToken } from '../../model/auth-token/index.js'
import {
  hasTrustedUserDeviceByDeviceID,
  upsertUserDevice,
} from '../../model/user-device/index.js'
import {
  hasUser2FAByUserUID,
  verifyUser2FAToken,
} from '../../model/user-2fa/index.js'

type Input = {
  password_reset_secret: string
  new_password: string
  device_id: string
  device_name: string
  device_trusted: boolean
  token_2fa: string | undefined
}

type Output = {
  user_uid: string
  auth_token: string
}

const resetUserPasswordHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input } = context
  const {
    password_reset_secret: passwordResetSecret,
    new_password: newPassword,
    device_id: deviceID,
    device_name: deviceName,
    device_trusted: deviceTrusted,
    token_2fa: token2FA,
  } = input

  const userPasswordReset = await selectUserPasswordResetBySecret(
    pool,
    passwordResetSecret,
  )
  if (userPasswordReset instanceof Error) {
    return userPasswordReset
  }

  const { userUID } = userPasswordReset

  const isTrustedDevice = await hasTrustedUserDeviceByDeviceID(pool, deviceID)

  const requires2FA = await hasUser2FAByUserUID(pool, userUID)
  const has2FAToken = typeof token2FA === 'string'

  if (requires2FA) {
    if (!isTrustedDevice && !has2FAToken) {
      return new AuthError({
        message: 'This user has 2FA enabled.',
        context: { userUID, requires2FA, isTrustedDevice, has2FAToken },
      })
    }

    if (has2FAToken) {
      const isValidToken = await verifyUser2FAToken(pool, {
        userUID,
        token: token2FA,
      })
      if (isValidToken instanceof Error) {
        return isValidToken
      }

      if (!isValidToken) {
        return new AuthError({
          message: 'Invalid 2FA token.',
          context: { userUID, isValidToken },
        })
      }
    }
  }

  const userError = await updateUser(pool, {
    userUID,
    password: newPassword,
  })
  if (userError instanceof Error) {
    return userError
  }

  const { authToken, expiresAt } = generateAuthToken(userUID)

  const userDeviceError = await upsertUserDevice(pool, {
    userUID,
    accessedAt: new Date(),
    deviceID,
    name: deviceName,
    trusted: deviceTrusted,
  })
  if (userDeviceError instanceof Error) {
    return userDeviceError
  }

  const deleteUserPasswordResetResult = await deleteUserPasswordReset(
    pool,
    userPasswordReset.UID,
  )
  if (deleteUserPasswordResetResult instanceof Error) {
    return deleteUserPasswordResetResult
  }

  return {
    user_uid: userUID,
    auth_token: authToken,
    expires_at: formatISO(expiresAt),
  }
}

export { resetUserPasswordHandler }
