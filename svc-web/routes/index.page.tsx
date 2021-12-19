import ReactDOM from 'react-dom'

import { useSession } from '../src/hooks/use-session'

import { VerifyEmail } from '../src/components/verify-email/index'
import { Navigation } from '../src/components/navigation/index'

import App from '../src/app'

const Index = () => {
  const session = useSession()

  const isAuthenticatedUser =
    session.role === 'user' && session.expiresAt > new Date()

  return (
    <>
      {isAuthenticatedUser && <VerifyEmail />}
      <Navigation session={session} />
    </>
  )
}

ReactDOM.render(
  <App>
    <Index />
  </App>,
  document.querySelector('#root'),
)
