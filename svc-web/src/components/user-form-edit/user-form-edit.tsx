import { useState } from 'react'

import { UserSession, setSession } from '../../utils/session-store'

import { Form, Input, Button } from '../retro-ui'
import { useUpdateUser } from './mutation-update-user'

type Props = {
  session: UserSession
}

type FormState = {
  editEmail: boolean
  email: string | undefined
  editPassword: boolean
  password: string | undefined
  password2: string | undefined
}

const initialFormState: FormState = {
  editEmail: false,
  email: undefined,
  editPassword: false,
  password: undefined,
  password2: undefined,
}

const UserFormEdit = (props: Props) => {
  const { session } = props

  const updateUser = useUpdateUser()

  const [state, setState] = useState<FormState>(initialFormState)

  const handleToggleEditEmail = () => {
    setState((state) => ({
      ...state,
      editEmail: !state.editEmail,
      email: session.email,
    }))
  }

  const handleToggleEditPassword = () => {
    setState((state) => ({
      ...state,
      editPassword: !state.editPassword,
      password: undefined,
      password2: undefined,
    }))
  }

  const handleFinish = async () => {
    if (state.editPassword && state.password !== state.password2) {
      alert('Your password does not match!')
      return
    }

    await updateUser({
      email: state.editEmail ? state.email : undefined,
      password: state.editPassword ? state.password : undefined,
    })

    if (typeof state.email === 'string') {
      setSession({
        ...session,
        email: state.email,
      })
    }

    setState(initialFormState)
  }

  return (
    <Form
      state={state}
      onChange={setState}
      name="UserFormEdit"
      onFinish={handleFinish}
    >
      <p>
        Email: {session.email}
        <Button htmlType="button" onClick={handleToggleEditEmail}>
          {state.editEmail ? 'Cancel' : 'Edit'}
        </Button>
      </p>

      {state.editEmail && (
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
      )}

      <p>
        Password: ********{' '}
        <Button htmlType="button" onClick={handleToggleEditPassword}>
          {state.editPassword ? 'Cancel' : 'Edit'}
        </Button>
      </p>
      {state.editPassword && (
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
      )}
      {state.editPassword && (
        <Form.Item name="password2" label="Repeat Password">
          <Input type="password" />
        </Form.Item>
      )}

      <Form.Item>
        <Button disabled={!state.editPassword && !state.editEmail}>Save</Button>
      </Form.Item>
    </Form>
  )
}

export { UserFormEdit }
