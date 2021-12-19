const STORAGE_KEY = 'kc-admin-session'

type GuestSession = {
  isAuthenticated: false
}

type UserSession = {
  isAuthenticated: true
  adminSecret: string
}

type Session = GuestSession | UserSession

const GUEST_SESSION: GuestSession = {
  isAuthenticated: false,
}

const getSession = (): Session => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value == null) {
      return GUEST_SESSION
    }

    return JSON.parse(value)
  } catch (error) {
    console.warn(error)
    return GUEST_SESSION
  }
}

const setSession = (session: Session): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export { getSession, setSession }

export type { Session, GuestSession, UserSession }
