import { useState, useEffect } from 'react'

import { getSession, Session, GUEST_SESSION } from '../../utils/session-store'

import { Logo } from '../logo'
import { LogoutButton } from '../logout-button'
import { Card, Button } from '../retro-ui'

const Navigation = () => {
  const [session, setSession] = useState<Session>(GUEST_SESSION)

  useEffect(() => {
    setSession(getSession())
  }, [])

  const isAuthenticatedUser =
    session.role === 'user' && session.expiresAt > new Date()

  return (
    <Card>
      <Logo />
      {!isAuthenticatedUser && (
        <>
          <Button type="primary" href="/register/">
            Sign Up
          </Button>
          <Button type="primary" href="/login/">
            Log In
          </Button>
        </>
      )}
      {isAuthenticatedUser && (
        <>
          <p>
            Logged in as <strong>{session.email}</strong>.
          </p>

          <ul>
            <li>
              <Button type="link" href="/market-price/">
                Market Price
              </Button>
            </li>
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
                Exchange API Keys
              </Button>
            </li>
            <li>
              <Button type="link" href="/devices/">
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

export { Navigation }
