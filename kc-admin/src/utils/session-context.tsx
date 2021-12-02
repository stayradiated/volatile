import React from 'react'

import type { Session } from './session-store'

const SessionContext = React.createContext<Session>({
  isAuthenticated: false,
})
SessionContext.displayName = 'SessionContext'

type SessionProviderProps = {
  children: React.ReactNode,
  session: Session,
}

const SessionProvider: React.FC<SessionProviderProps> = (props) => { 
  const { children, session } = props
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

const useSessionContext = (): Session => {
  return React.useContext(SessionContext)
}

export { SessionContext, SessionProvider, useSessionContext }
