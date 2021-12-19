import { useState, useEffect } from 'react'

import { getSession, Session, GUEST_SESSION } from '../utils/session-store'

const useSession = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  return session
}

export { useSession }
