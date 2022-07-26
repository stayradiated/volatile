import { Logo } from '../logo'
import { Card, PrimaryButton, LinkButton } from '../retro-ui'

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
          <PrimaryButton href="/register">Sign Up</PrimaryButton>
          <PrimaryButton href="/login">Log In</PrimaryButton>
        </>
      )}
      {isAuthenticatedUser && (
        <>
          <p>
            Logged in as <strong>{email}</strong>.
          </p>

          <ul>
            <li>
              <LinkButton href="/account">Account</LinkButton>
            </li>
            <li>
              <LinkButton href="/subscription">Subscription</LinkButton>
            </li>
            <li>
              <LinkButton href="/market-price">Market Price</LinkButton>
            </li>
            <li>
              <LinkButton href="/exchanges">Exchanges</LinkButton>
            </li>
            <li>
              <LinkButton href="/dca-orders">DCA Orders</LinkButton>
            </li>
            <li>
              <LinkButton href="/trades">Trades</LinkButton>
            </li>
            <li>
              <LinkButton href="/open-orders">Open Orders</LinkButton>
            </li>
            <li>
              <LinkButton href="/settings">Exchange API Keys</LinkButton>
            </li>
            <li>
              <LinkButton href="/logout">Logout</LinkButton>
            </li>
          </ul>
        </>
      )}
    </Card>
  )
}

export { Navigation }
