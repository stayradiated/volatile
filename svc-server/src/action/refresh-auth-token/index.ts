import { formatISO } from 'date-fns'

import { MissingRequiredArgumentError } from '../../util/error.js'

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
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const result = generateAuthToken(userUID)
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
