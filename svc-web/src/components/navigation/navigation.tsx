import { Session } from '../../utils/session-store'

import { Logo } from '../logo'
import { LogoutButton } from '../logout-button'
import { Card, Button } from '../retro-ui'

type Props = {
  session: Session
}

const Navigation = (props: Props) => {
  const { session } = props

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
              <Button type="link" href="/account/">
                Account
              </Button>
            </li>
            <li>
              <Button type="link" href="/market-price/">
                Market Price
              </Button>
            </li>
            <li>
              <Button type="link" href="/exchanges/">
                Exchanges
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
