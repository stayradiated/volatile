import { Alert, Form, Input, PrimaryButton } from '../retro-ui'

type Props = {
  email: string
  error: string | undefined
}

const UserFormEditEmail = (props: Props) => {
  const { email, error } = props

  return (
    <Form name="UserFormEditEmail" method="post" action="/account/email">
      <p>
        Email: {email}
      </p>

      {error && <Alert type='error' message={error} />}

      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>

      <Form.Item>
        <PrimaryButton>Save</PrimaryButton>
      </Form.Item>
    </Form>
  )
}

export { UserFormEditEmail }
