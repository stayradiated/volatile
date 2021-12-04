import ReactDOM from 'react-dom'

import { setSession, Session } from '../../src/utils/session-store'
import { LoginForm } from '../../src/components/login-form/index'

import App from '../../src/app'

const Login = () => {
  const handleSession = (session: Session) => {
    setSession(session)
    window.location.replace('/')
  }

  return (
    <LoginForm onSession={handleSession} />
  )
}

ReactDOM.render(
  <App>
    <Login />
  </App>,
  document.querySelector('#root'),
)
