import { useState } from 'react'

import { Form, Input, Button } from '../retro-ui'

type Props = {
  email: string
}

const UserFormEdit = (props: Props) => {
  const { email } = props

  const [editEmail, setEditEmail] = useState(false)
  const [editPassword, setEditPassword] = useState(false)

  const handleToggleEditEmail = () => {
    setEditEmail(!editEmail)
  }

  const handleToggleEditPassword = () => {
    setEditPassword(!editPassword)
  }

  return (
    <Form name="UserFormEdit" method="post" action="/account/edit">
      <p>
        Email: {email}
        <Button htmlType="button" onClick={handleToggleEditEmail}>
          {editEmail ? 'Cancel' : 'Edit'}
        </Button>
      </p>

      {editEmail && (
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
      )}

      <p>
        Password: ********{' '}
        <Button htmlType="button" onClick={handleToggleEditPassword}>
          {editPassword ? 'Cancel' : 'Edit'}
        </Button>
      </p>
      {editPassword && (
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
      )}
      {editPassword && (
        <Form.Item name="password2" label="Repeat Password">
          <Input type="password" />
        </Form.Item>
      )}

      <Form.Item>
        <Button disabled={!editPassword && !editEmail}>Save</Button>
      </Form.Item>
    </Form>
  )
}

export { UserFormEdit }
