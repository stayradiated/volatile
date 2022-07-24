import { createCookieSessionStorage } from '@remix-run/node'
import config from './env.server'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      secrets: [config.COOKIE_SECRET],
      sameSite: 'lax',
      httpOnly: true,
      secure: false,
      path: '/',
      // Set session expiration to 5 days
      maxAge: 60 * 60 * 24 * 5,
    },
  })

export { getSession, commitSession, destroySession }
