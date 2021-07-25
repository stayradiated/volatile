import { useCallback, useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import type { Session } from '../../utils/session-store'

const CREATE_AUTH_TOKEN = gql`
mutation create_auth_token($email: String!, $password: String!) {
  create_auth_token(email:$email, password:$password) {
    user_uid
    auth_token
  }
}`;

type LoginFormProps = {
  onSession: (session: Session) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { onSession } = props

  const [createAuthToken, { data }] = useMutation(CREATE_AUTH_TOKEN);
  console.log(data)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string|undefined>(undefined)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const email = emailRef?.current?.value as string
    const password = passwordRef?.current?.value as string
    console.log({ email, password })
    setLoading(true)
    setError(undefined)
    createAuthToken({ variables: { email, password }}).then((result) => {
      const authToken = result.data.create_auth_token.auth_token as string
      setLoading(false)
      onSession({ role: 'user', email, authToken })
    }, (error) => {
      setError(error.message)
      setLoading(false)
    })
  }, [createAuthToken])

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='email' ref={emailRef} disabled={loading} />
      <input type='password' placeholder='password' ref={passwordRef} disabled={loading} />
      <input type='submit' value='Login' disabled={loading} />
      {error && (
        <p>{error}</p>
      )}
      {data && (<code>{JSON.stringify(data, null, 2)}</code>)}
    </form>
  )
}

export { LoginForm }
