import { getSession } from './sessions.server'

const getSessionData = async (request: Request) => {
  const session = await getSession(request.headers.get('cookie'))
  return {
    email: session.get('email') as string | undefined,
    userUID: session.get('userUID') as string | undefined,
    authToken: session.get('authToken') as string | undefined,
    expiresAt: session.get('expiresAt') as string | undefined,
    session,
  }
}

export { getSessionData }
