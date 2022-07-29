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
  const { userUID, role } = session

  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  if (role !== 'user' && role !== 'superuser') {
    return new IllegalArgumentError({
      message: 'Cannot refresh tokens for this role.',
    })
  }

  const result = generateAuthToken({ userUID, role })
  if (result instanceof Error) {
    return result
  }

  const { authToken, expiresAt } = result

  return {
    user_uid: userUID,
    auth_token: authToken,
    expires_at: formatISO(expiresAt),
  }
}

export {
  refreshAuthTokenHandler,
  RefreshAuthTokenInput,
  RefreshAuthTokenOutput,
}
