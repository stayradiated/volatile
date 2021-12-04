import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { getSession, Session, GUEST_SESSION } from '../src/utils/session-store'

import { Logo } from '../src/components/logo'
import { LogoutButton } from '../src/components/logout-button'
import { Card, Button } from '../src/components/retro-ui'

import App from '../src/app'

const Index = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  return (
    <Card>
      <Logo />
      {session.role === 'guest' && (
        <>
          <Button type="primary" href="/register/">
            Sign Up
          </Button>
          <Button type="primary" href="/login/">
            Log In
          </Button>
        </>
      )}
      {session.role === 'user' && (
        <>
          <p>
            Logged in as <strong>{session.email}</strong>.
          </p>

          <ul>
            <li>
              <Button type="link" href="/dca-orders/">
                DCA Orders
              </Button>
            </li>
            <li>
              <Button type="link" href="/trades/">
                Trades
              </Button>
            </li>
            <li>
              <Button type="link" href="/open-orders/">
                Open Orders
              </Button>
            </li>
            <li>
              <Button type="link" href="/settings/">
                Settings
              </Button>
            </li>
            <li>
              <Button type="link" href="/dca-orders/">
                Devices
              </Button>
            </li>
          </ul>

          <LogoutButton />
        </>
      )}
    </Card>
  )
}

ReactDOM.render(
  <App>
    <Index />
  </App>,
  document.querySelector('#root'),
)
