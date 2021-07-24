export type UserSession = {
    role: 'user',
    email: string,
    authToken: string
}

export type GuestSession = {
    role: 'guest',
    email: undefined,
    authToken: undefined
}

export type Session = UserSession | GuestSession

const GUEST_SESSION: GuestSession = {
    role: 'guest',
    email: undefined,
    authToken: undefined,
}


let localSession: Session = GUEST_SESSION

const getSession = (): Session => {
    return localSession
}

const setSession = (session: Session): void => {
    localSession = session
}

export {
    GUEST_SESSION,
    getSession,
    setSession,
}
