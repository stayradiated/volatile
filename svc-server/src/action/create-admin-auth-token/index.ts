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
  const { user_uid: userUID } = input
  
  const result = await createAdminAuthToken({ userUID })
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

export { createAdminAuthTokenHandler }
export type { CreateAdminAuthTokenInput, CreateAdminAuthTokenOutput }
