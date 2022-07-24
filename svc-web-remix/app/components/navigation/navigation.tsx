import { Logo } from '../logo'
import { Card, Button } from '../retro-ui'

type Props = {
  isAuthenticatedUser: boolean
  email: string
}

const Navigation = (props: Props) => {
  const { isAuthenticatedUser, email } = props

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
            Logged in as <strong>{email}</strong>.
          </p>

          <ul>
            <li>
              <Button type="link" href="/account/">
                Account
              </Button>
            </li>
            <li>
              <Button type="link" href="/subscription/">
                Subscription
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
            <li>
              <Button type="link" href="/logout/">
                Logout
              </Button>
            </li>
          </ul>
        </>
      )}
    </Card>
  )
}

export { Navigation }
