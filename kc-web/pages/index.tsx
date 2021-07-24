import { useEffect, useState } from 'react'

import { Session, GUEST_SESSION, setSession as setGlobalSession } from '../utils/session-store'

import { LoginForm } from '../components/login-form/index' 
import { ExchangeList } from '../components/exchange-list/index' 
import { MarketList } from '../components/market-list/index' 

const Index = () => {
  const [ session, setSession ] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setGlobalSession(session)
  }, [session])

  return (
    <>
      <ExchangeList />
      <MarketList />
      {session.role === 'guest' && <LoginForm setSession={setSession} />}
      {session.role === 'user' && <p>Logged in as {session.email}</p>}
    </>
  )
}

export default Index
