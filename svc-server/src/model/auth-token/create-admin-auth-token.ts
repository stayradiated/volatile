import { generateAuthToken } from './generate-auth-token.js'

type CreateAdminAuthTokenOptions = {
  userUid: string
}

type AuthTokenResult = {
  userUid: string
  authToken: string
  expiresAt: Date
}

const createAdminAuthToken = async (
  options: CreateAdminAuthTokenOptions,
): Promise<AuthTokenResult | Error> => {
  const { userUid } = options
  const role = 'admin'
  const { authToken, expiresAt } = generateAuthToken({ userUid, role })

  return { userUid, authToken, expiresAt }
}

export { createAdminAuthToken }
