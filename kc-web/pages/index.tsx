import { useEffect, useState } from 'react'

import { Session, GUEST_SESSION, setSession as setGlobalSession } from '../utils/session-store'

import { LoginForm } from '../components/login-form/index' 
import { ExchangeList } from '../components/exchange-list/index' 
import { MarketList } from '../components/market-list/index' 
import { UserExchangeKeysList } from '../components/user-exchange-keys-list/index'
import { UserExchangeKeysForm } from '../components/user-exchange-keys-form/index'
import { DCAOrderList } from '../components/dca-order-list/index'
import { DCAOrderForm } from '../components/dca-order-form/index'

const Index = () => {
  const [ session, setSession ] = useState<Session>(GUEST_SESSION)

  const handleSession = (session: Session) => {
    setSession(session)
    setGlobalSession(session)
  }

  return (
    <>
      <ExchangeList />
      <MarketList />
      {session.role === 'guest' && <LoginForm onSession={handleSession} />}
      {session.role === 'user' && (
        <div>
          <p>Logged in as {session.email}</p>
          <UserExchangeKeysList />
          <UserExchangeKeysForm />
          <DCAOrderList />
          <DCAOrderForm />
        </div>
      )}
    </>
  )
}

export default Index
