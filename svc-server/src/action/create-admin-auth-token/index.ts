import { formatISO } from 'date-fns'

import { createAdminAuthToken } from '../../model/auth-token/index.js'
import type { ActionHandlerFn } from '../../util/action-handler.js'

type CreateAdminAuthTokenInput = {
  user_uid: string
}

type CreateAdminAuthTokenOutput = {
  user_uid: string
  auth_token: string
  expires_at: string
}

const createAdminAuthTokenHandler: ActionHandlerFn<
  CreateAdminAuthTokenInput,
  CreateAdminAuthTokenOutput
> = async (context) => {
  const { input } = context
  const { user_uid: userUid } = input

  const result = await createAdminAuthToken({ userUid })
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

export { createAdminAuthTokenHandler }
export type { CreateAdminAuthTokenInput, CreateAdminAuthTokenOutput }
