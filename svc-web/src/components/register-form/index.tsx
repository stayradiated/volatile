import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import type { Session } from '../../utils/session-store'
import { useCreateAuthToken } from '../../hooks/mutations/use-create-auth-token'
import { Alert, Card, Form, Input, Button } from '../retro-ui'
import { Logo } from '../logo'

import styles from './index.module.css'

const MUTATION_CREATE_USER = gql`
  mutation create_user($email: String!, $password: String!) {
    create_user(email: $email, password: $password) {
      user_uid
    }
  }
`

type RegisterFormProps = {
  onSession: (session: Session) => void
}

type RegisterFormState = {
  email: string
  password: string
}

const RegisterForm = (props: RegisterFormProps) => {
  const { onSession } = props

  const [createUser] = useMutation(MUTATION_CREATE_USER)
  const createAuthToken = useCreateAuthToken()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const [state, setState] = useState<RegisterFormState>({
    email: '',
    password: '',
  })

  const handleFinish = () => {
    const { email, password } = state

    setLoading(true)
    setError(undefined)

    createUser({ variables: { email, password } })
      .then(async () => createAuthToken({ email, password, token2FA: undefined }))
      .then(
        (session) => {
          setLoading(false)
          onSession(session)
        },
        (error) => {
          setError(error)
          setLoading(false)
        },
      )
  }

  return (
    <Card>
      <Logo />
      <Form
        name="register"
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item>
          <p>Create a new account.</p>
        </Form.Item>
        {error && <Alert message={error.message} type="error" />}
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" disabled={loading} />
        </Form.Item>
        <Form.Item className={styles.actions}>
          <Button type="link" href="/login/">
            log in
          </Button>

          <Button type="primary" htmlType="submit" loading={loading}>
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export { RegisterForm }
