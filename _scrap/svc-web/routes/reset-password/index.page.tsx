import ReactDOM from 'react-dom'

import { ResetPasswordForm } from '../../src/components/reset-password-form/index'
import { SendUserPasswordResetForm } from '../../src/components/send-user-password-reset-form/index'

import App from '../../src/app'

import { setSession, Session } from '../../src/utils/session-store'

const Page = () => {
  const searchParameters = new URLSearchParams(window.location.search)
  const secret = searchParameters.get('secret')

  const handleSession = (session: Session) => {
    setSession(session)
    window.location.replace('/')
  }

  if (secret) {
    return (
      <ResetPasswordForm
        passwordResetSecret={secret}
        onSession={handleSession}
      />
    )
  }

  return <SendUserPasswordResetForm />
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
