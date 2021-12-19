import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Card, Alert, Spin } from '../../src/components/retro-ui'
import { useVerifyUserEmail } from '../../src/hooks/mutations/use-verify-user-email'

import App from '../../src/app'

const Page = () => {
  const searchParameters = new URLSearchParams(window.location.search)
  const secret = searchParameters.get('secret')

  const verifyUserEmail = useVerifyUserEmail()

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [email, setEmail] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!secret) {
      return
    }

    verifyUserEmail({ emailVerifySecret: secret }).then(
      ({ email }) => {
        setLoading(false)
        setEmail(email)
      },
      (error) => {
        setLoading(false)
        setError(error)
      },
    )
  }, [])

  if (!secret) {
    return <Card>Hmm, couldn't find the secret.</Card>
  }

  if (loading) {
    return (
      <Card>
        <Spin />
        Verifying...
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <Alert message={error.message} type="error" />
      </Card>
    )
  }

  return (
    <Card>
      Successuflly verified email <strong>{email}</strong>
    </Card>
  )
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
