import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Form, Alert, Input, PrimaryButton } from '../retro-ui'

const FormAction = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type RegisterFormProps = {
  loading: boolean
  error: string | undefined
}

const RegisterForm = (props: RegisterFormProps) => {
  const { loading: _loading, error } = props

  return (
    <Form name="register" method="post">
      <p>Create a new account.</p>
      {error && <Alert message={error} type="error" />}
      <Form.Item label="Email">
        <Input name="email" type="email" />
      </Form.Item>
      <Form.Item label="Password">
        <Input type="password" name="password" />
      </Form.Item>
      <FormAction>
        <Link to="/login">Log in</Link>
        <PrimaryButton type="submit">SIGN UP</PrimaryButton>
      </FormAction>
    </Form>
  )
}

export { RegisterForm }
