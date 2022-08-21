import { formatISO } from 'date-fns'

import {
  MissingRequiredArgumentError,
  IllegalArgumentError,
} from '../../util/error.js'

import { generateAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandlerFn } from '../../util/action-handler.js'

type RefreshAuthTokenInput = Record<string, unknown>

type RefreshAuthTokenOutput = {
  user_uid: string
  auth_token: string
  expires_at: string
}

const refreshAuthTokenHandler: ActionHandlerFn<
  RefreshAuthTokenInput,
  RefreshAuthTokenOutput
> = async (context) => {
  const { session } = context
  const { userUid, role } = session

  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  if (role !== 'user' && role !== 'superuser') {
    return new IllegalArgumentError({
      message: 'Cannot refresh tokens for this role.',
    })
  }

  const result = generateAuthToken({ userUid, role })
  if (result instanceof Error) {
    return result
  }

  const { authToken, expiresAt } = result

  return {
    user_uid: userUid,
    auth_token: authToken,
    expires_at: formatISO(expiresAt),
  }
}

export {
  refreshAuthTokenHandler,
  RefreshAuthTokenInput,
  RefreshAuthTokenOutput,
}
