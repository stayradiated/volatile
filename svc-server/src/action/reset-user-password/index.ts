import * as z from 'zod'
import { formatISO } from 'date-fns'

import { AuthError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import {
  selectUserPasswordResetBySecret,
  deleteUserPasswordReset,
} from '../../model/user-password-reset/index.js'
import { updateUser } from '../../model/user/index.js'
import { generateAuthToken } from '../../model/auth-token/index.js'
import {
  hasTrustedUserDeviceByDeviceID,
  upsertUserDevice,
  untrustAllUserDevices,
} from '../../model/user-device/index.js'
import {
  hasUser2FaByUserUid,
  verifyUser2FaToken,
} from '../../model/user-2fa/index.js'

const schema = {
  input: {
    passwordResetSecret: z.string(),
    newPassword: z.string(),
    deviceId: z.string(),
    deviceName: z.string(),
    deviceTrusted: z.boolean(),
    token2Fa: z.optional(z.string()),
  },
  output: {
    userUid: z.string(),
    authToken: z.string(),
  },
}
const resetUserPasswordHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const {
      passwordResetSecret,
      newPassword,
      deviceId,
      deviceName,
      deviceTrusted,
      token2Fa,
    } = input

    const userPasswordReset = await selectUserPasswordResetBySecret(
      pool,
      passwordResetSecret,
    )
    if (userPasswordReset instanceof Error) {
      return userPasswordReset
    }

    const { userUid } = userPasswordReset

    const isTrustedDevice = await hasTrustedUserDeviceByDeviceID(pool, deviceId)

    const requires2Fa = await hasUser2FaByUserUid(pool, userUid)
    const has2FaToken = typeof token2Fa === 'string'

    if (requires2Fa) {
      if (!isTrustedDevice && !has2FaToken) {
        return new AuthError({
          message: 'This user has 2Fa enabled.',
          context: { userUid, requires2Fa, isTrustedDevice, has2FaToken },
        })
      }

      if (has2FaToken) {
        const isValidToken = await verifyUser2FaToken(pool, {
          userUid,
          token: token2Fa,
        })
        if (isValidToken instanceof Error) {
          return isValidToken
        }

        if (!isValidToken) {
          return new AuthError({
            message: 'Invalid 2Fa token.',
            context: { userUid, isValidToken },
          })
        }
      }
    }

    const deleteUserPasswordResetResult = await deleteUserPasswordReset(
      pool,
      userPasswordReset.uid,
    )
    if (deleteUserPasswordResetResult instanceof Error) {
      return deleteUserPasswordResetResult
    }

    const untrustError = await untrustAllUserDevices(pool, { userUid })
    if (untrustError instanceof Error) {
      return untrustError
    }

    const userError = await updateUser(pool, {
      userUid,
      password: newPassword,
    })
    if (userError instanceof Error) {
      return userError
    }

    const { authToken, expiresAt } = generateAuthToken({
      userUid,
      role: 'user',
    })

    const userDeviceError = await upsertUserDevice(pool, {
      userUid,
      accessedAt: new Date(),
      deviceId,
      name: deviceName,
      trusted: deviceTrusted,
    })
    if (userDeviceError instanceof Error) {
      return userDeviceError
    }

    return {
      userUid,
      authToken,
      expiresAt: formatISO(expiresAt),
    }
  },
}

export { resetUserPasswordHandler }
