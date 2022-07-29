import { formatISO } from 'date-fns'

import { AuthError, IllegalArgumentError } from '../../util/error.js'

import { createAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandlerFn } from '../../util/action-handler.js'
import {
  hasTrustedUserDeviceByDeviceID,
  upsertUserDevice,
} from '../../model/user-device/index.js'
import {
  hasUser2FAByUserUID,
  verifyUser2FAToken,
} from '../../model/user-2fa/index.js'

type CreateAuthTokenInput = {
  email: string
  password: string
  device_id: string
  device_name: string
  device_trusted: boolean
  token_2fa: string | undefined
  role: string
}

type CreateAuthTokenOutput = {
  user_uid: string
  auth_token: string
  expires_at: string
}

const createAuthTokenHandler: ActionHandlerFn<
  CreateAuthTokenInput,
  CreateAuthTokenOutput
> = async (context) => {
  const { pool, input } = context
  const {
    email: rawEmail,
    password,
    device_id: deviceID,
    device_name: deviceName,
    device_trusted: deviceTrusted,
    token_2fa: token2FA,
    role,
  } = input

  const email = rawEmail.trim().toLowerCase()

  if (role !== 'user' && role !== 'superuser') {
    return new IllegalArgumentError({
      message: 'Role must be either "user" or "superuser".',
      context: { email, role },
    })
  }

  const result = await createAuthToken(pool, { email, password, role })
  if (result instanceof Error) {
    return result
  }

  const { userUID, authToken, expiresAt } = result

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

  const error = await upsertUserDevice(pool, {
    userUID,
    accessedAt: new Date(),
    deviceID,
    name: deviceName,
    trusted: deviceTrusted,
  })
  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
    auth_token: authToken,
    expires_at: formatISO(expiresAt),
  }
}

export { createAuthTokenHandler, CreateAuthTokenInput, CreateAuthTokenOutput }
