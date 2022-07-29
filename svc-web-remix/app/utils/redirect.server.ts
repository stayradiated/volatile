import { redirect } from '@remix-run/node'

import { Session, destroySession } from '~/utils/auth.server'

const safeRedirect = (request: Request, to: string, options?: ResponseInit) => {
  const url = new URL(request.url)
  const path = url.origin + to
  return redirect(path, options)
}

const loginRedirect = async (request: Request, session: Session) => {
  const url = new URL(request.url)
  return safeRedirect(request, `/login?return=${url.pathname}`, {
    headers: {
      'Set-Cookie': await destroySession(session.cookie),
    },
  })
}

export { safeRedirect, loginRedirect }
