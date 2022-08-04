import { useState } from 'react'

import { Form, Input, Button } from '../retro-ui'
import { clearSession } from '../../utils/session-store'
import { useDeleteUser } from './mutation-delete-user'

const confirmPhrase = 'DELETE ACCOUNT'

type FormState = {
  confirm?: string
}

const initialState: FormState = {
  confirm: '',
}

const UserFormDelete = () => {
  const deleteUser = useDeleteUser()

  const [state, setState] = useState<FormState>(initialState)

  const handleDelete = async () => {
    await deleteUser({})
    clearSession()
    window.location.replace('/')
  }

  const canDelete = state.confirm === confirmPhrase

  return (
    <div>
      <h3>⚠️ Delete Account ⚠️</h3>

      <Form
        name="UserFormDelete"
        state={state}
        onChange={setState}
        onFinish={handleDelete}
      >
        <Form.Item name="confirm" label={`TYPE "${confirmPhrase}"`}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button disabled={!canDelete}>Delete Account</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormDelete }
