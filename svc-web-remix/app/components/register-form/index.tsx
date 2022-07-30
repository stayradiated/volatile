import { Link, Form } from '@remix-run/react'
import styled from 'styled-components'

import { Alert, Card, Input, PrimaryButton } from '../retro-ui'
import { Logo } from '../logo'

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`

type RegisterFormProps = {
  loading: boolean
  error: string | undefined
}

const RegisterForm = (props: RegisterFormProps) => {
  const { loading, error } = props

  return (
    <Card>
      <Logo />
      <Form method="post">
        <p>Create a new account.</p>
        {error && <Alert message={error} type="error" />}

        <fieldset disabled={loading}>
          <Input name="email" type="email" />
          <Input type="password" name="password" />
          <Section>
            <Link to="/login">log in</Link>
            <PrimaryButton type="submit">SIGN UP</PrimaryButton>
          </Section>
        </fieldset>
      </Form>
    </Card>
  )
}

export { RegisterForm }
