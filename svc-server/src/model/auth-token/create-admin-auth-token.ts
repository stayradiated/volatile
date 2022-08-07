import { generateAuthToken } from './generate-auth-token.js'

type CreateAdminAuthTokenOptions = {
  userUID: string
}

type AuthTokenResult = {
  userUID: string
  authToken: string
  expiresAt: Date
}

const createAdminAuthToken = async (options: CreateAdminAuthTokenOptions): Promise<AuthTokenResult | Error> => {
  const { userUID } = options
  const role = 'admin'
  const { authToken, expiresAt } = generateAuthToken({ userUID, role })

  return { userUID, authToken, expiresAt }
}

export { createAdminAuthToken }
