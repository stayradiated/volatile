import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Logo } from '../logo'
import {
  Alert,
  Card,
  Form,
  CheckboxInput,
  Input,
  PrimaryButton,
} from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type LoginFormProps = {
  error: string | undefined
}

const LoginForm = (props: LoginFormProps) => {
  const { error } = props

  return (
    <Card>
      <Logo />
      <Form name="login" method="post" action="/login">
        <Form.Item>
          <p>Log in to your account</p>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="2FA Token" name="token2FA">
          <Input />
        </Form.Item>
        <Form.Item label="Don't Ask Me For 2FA Again" name="deviceTrusted">
          <CheckboxInput />
        </Form.Item>
        <FormActions>
          <div>
            <Link to="/register/">sign up</Link> or{' '}
            <Link to="/reset-password/">reset password</Link>
          </div>

          <PrimaryButton type="submit">Log In</PrimaryButton>
        </FormActions>
      </Form>
    </Card>
  )
}

export { LoginForm }
