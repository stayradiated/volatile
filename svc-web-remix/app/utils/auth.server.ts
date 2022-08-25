import * as z from 'zod'
import { errorBoundarySync } from '@stayradiated/error-boundary'
import { Session as RemixSession } from '@remix-run/node'
import { fromUnixTime, isBefore } from 'date-fns'
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

const jwtSchema = z.object({
  iss: z.string(),
  sub: z.string(),
  'https://hasura.io/jwt/claims': z.object({
    'x-hasura-allowed-roles': z.array(z.string()),
    'x-hasura-default-role': z.string(),
    'x-hasura-user-id': z.string(),
  }),
  jti: z.string(),
  iat: z.number(),
  exp: z.number(),
})

type JWT = z.infer<typeof jwtSchema>

const parseJWT = (input: string): JWT | Error => {
  return errorBoundarySync(() => {
    const [_header, payload, _signature] = input.split('.')
    const data = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'))
    return jwtSchema.parse(data)
  })
}

type AuthTokenInfo = {
  role: string
  userUid: string
  authToken: string
  expiresAt: Date
}

const readAuthToken = (input: unknown): AuthTokenInfo | Error => {
  if (typeof input !== 'string') {
    return new Error('Missing JWT.')
  }

  const jwt = parseJWT(input)
  if (jwt instanceof Error) {
    return jwt
  }

  const userUid = jwt['https://hasura.io/jwt/claims']['x-hasura-user-id']
  const role = jwt['https://hasura.io/jwt/claims']['x-hasura-default-role']
  const expiresAt = fromUnixTime(jwt.exp)

  if (isBefore(expiresAt, new Date())) {
    return new Error('JWT has expired')
  }

  return {
    role,
    userUid,
    authToken: input,
    expiresAt,
  }
}

type BaseSession = {
  readonly role: string
  readonly cookie: RemixSession
}

type UserSession = BaseSession & {
  readonly role: 'user'
  readonly userUid: string
  readonly email: string
  readonly authToken: string
}

type SuperuserSession = BaseSession & {
  readonly role: 'superuser'
  readonly userUid: string
  readonly email: string
  readonly authToken: string
}

type AdminSession = BaseSession & {
  readonly role: 'admin'
  readonly userUid: string
  readonly email: string
  readonly authToken: string
}

type GuestSession = BaseSession & {
  readonly role: 'guest'
}

type Session = GuestSession | UserSession | SuperuserSession | AdminSession
type NonGuestSession = Omit<Session, 'GuestSession'>

const getSessionData = async (request: Request): Promise<Session> => {
  const cookie = await getSession(request.headers.get('cookie'))

  const guestSession: GuestSession = { role: 'guest', cookie }

  const email = cookie.get('e')
  if (typeof email !== 'string') {
    return guestSession
  }

  const adminAuthToken = readAuthToken(cookie.get('a'))
  if (!(adminAuthToken instanceof Error)) {
    return {
      role: adminAuthToken.role as 'admin',
      email,
      userUid: adminAuthToken.userUid,
      authToken: adminAuthToken.authToken,
      cookie,
    }
  }

  const superuserAuthToken = readAuthToken(cookie.get('s'))
  if (!(superuserAuthToken instanceof Error)) {
    return {
      role: superuserAuthToken.role as 'superuser',
      email,
      userUid: superuserAuthToken.userUid,
      authToken: superuserAuthToken.authToken,
      cookie,
    }
  }

  const userAuthToken = readAuthToken(cookie.get('u'))
  if (!(userAuthToken instanceof Error)) {
    return {
      role: userAuthToken.role as 'user',
      email,
      userUid: userAuthToken.userUid,
      authToken: userAuthToken.authToken,
      cookie,
    }
  }

  return guestSession
}

type SetSessionDataOptions = {
  request: Request
  email?: string
  userAuthToken?: string
  superuserAuthToken?: string
  adminAuthToken?: string
}

const setSessionData = async (options: SetSessionDataOptions) => {
  const { request, email, userAuthToken, superuserAuthToken, adminAuthToken } =
    options

  const cookie = await getSession(request.headers.get('Cookie'))

  if (typeof email === 'string') {
    cookie.set('e', email)
  }

  if (typeof userAuthToken === 'string') {
    cookie.set('u', userAuthToken)
  }

  if (typeof superuserAuthToken === 'string') {
    cookie.set('s', superuserAuthToken)
  }

  if (typeof adminAuthToken === 'string') {
    cookie.set('s', adminAuthToken)
  }

  return cookie
}

export {
  getSessionData,
  setSessionData,
  getSession,
  commitSession,
  destroySession,
}
export type {
  GuestSession,
  NonGuestSession,
  UserSession,
  SuperuserSession,
  Session,
}
