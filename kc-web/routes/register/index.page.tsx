import ReactDOM from 'react-dom'

import { setSession, Session } from '../../src/utils/session-store'
import { RegisterForm } from '../../src/components/register-form/index'

import App from '../../src/app'

const Register = () => {
  const handleSession = (session: Session) => {
    console.log(session)
    setSession(session)
    window.location.replace('/')
  }

  return (
    <RegisterForm onSession={handleSession} />
  )
}

ReactDOM.render(
  <App>
    <Register />
  </App>,
  document.querySelector('#root'),
)
