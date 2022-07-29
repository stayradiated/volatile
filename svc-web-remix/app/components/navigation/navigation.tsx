import { Link } from '@remix-run/react'

import { Logo } from '../logo'
import { Card } from '../retro-ui'

type Props = {
  isAuthenticatedUser: boolean
  email: string | undefined
}

const Navigation = (props: Props) => {
  const { email, isAuthenticatedUser } = props

  return (
    <Card>
      <Logo />
      {!isAuthenticatedUser && (
        <ul>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      )}
      {isAuthenticatedUser && (
        <>
          <p>
            Logged in as <strong>{email}</strong>.
          </p>

          <ul>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/subscription">Subscription</Link>
            </li>
            <li>
              <Link to="/market-price">Market Price</Link>
            </li>
            <li>
              <Link to="/exchanges">Exchanges</Link>
            </li>
            <li>
              <Link to="/dca-orders">DCA Orders</Link>
            </li>
            <li>
              <Link to="/trades">Trades</Link>
            </li>
            <li>
              <Link to="/open-orders">Open Orders</Link>
            </li>
            <li>
              <Link to="/settings">Exchange API Keys</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </>
      )}
    </Card>
  )
}

export { Navigation }
