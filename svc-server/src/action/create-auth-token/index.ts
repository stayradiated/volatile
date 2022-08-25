import { formatISO } from 'date-fns'
import * as z from 'zod'

import { AuthError, IllegalArgumentError } from '../../util/error.js'

import { createAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandler } from '../../util/action-handler.js'
import {
  hasTrustedUserDeviceByDeviceID,
  upsertUserDevice,
} from '../../model/user-device/index.js'
import {
  hasUser2FaByUserUid,
  verifyUser2FaToken,
} from '../../model/user-2fa/index.js'

const schema = {
  input: {
    email: z.string(),
    password: z.string(),
    deviceId: z.string(),
    deviceName: z.string(),
    deviceTrusted: z.boolean(),
    token2fa: z.optional(z.string()),
    role: z.string(),
  },
  output: {
    userUid: z.string(),
    authToken: z.string(),
    expiresAt: z.string(),
  },
}

const createAuthTokenHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const {
      email: rawEmail,
      password,
      deviceId,
      deviceName,
      deviceTrusted,
      token2fa,
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

    const { userUid, authToken, expiresAt } = result

    const isTrustedDevice = await hasTrustedUserDeviceByDeviceID(pool, deviceId)

    const requires2Fa = await hasUser2FaByUserUid(pool, userUid)
    const has2FaToken = typeof token2fa === 'string'

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
          token: token2fa,
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

    const error = await upsertUserDevice(pool, {
      userUid,
      accessedAt: new Date(),
      deviceId,
      name: deviceName,
      trusted: deviceTrusted,
    })
    if (error instanceof Error) {
      return error
    }

    return {
      userUid,
      authToken,
      expiresAt: formatISO(expiresAt),
    }
  },
}

export { createAuthTokenHandler }
