import ReactDOM from 'react-dom'

import { setSession, Session } from '../../src/utils/session-store'
import { RegisterForm } from '../../src/components/register-form/index'
import { useSendUserEmailVerify } from '../../src/hooks/mutations/use-send-user-email-verify'

import App from '../../src/app'

const Register = () => {
  const sendUserEmailVerify = useSendUserEmailVerify()

  const handleSession = async (session: Session) => {
    console.log(session)
    setSession(session)

    await sendUserEmailVerify()

    window.location.replace('/')
  }

  return <RegisterForm onSession={handleSession} />
}

ReactDOM.render(
  <App>
    <Register />
  </App>,
  document.querySelector('#root'),
)
