import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Spin, Alert, Card, Button, Form, Input } from '../retro-ui'

import type {
  GetUser2FaQuery as Query,
  GetUser2FaQueryVariables as QueryVariables,
} from '../../utils/graphql'
import { useSetupUser2FA } from './query-setup-user-2fa'
import { useEnableUser2FA } from './mutation-enable-user-2fa'
import { useDeleteUser2FA } from './mutation-delete-user-2fa'

const QUERY = gql`
  query getUser2FA {
    kc_user {
      uid
      user_2fa {
        created_at
        name
        uid
      }
    }
  }
`

type State = {
  qrcode: string | undefined
  secret: string | undefined
  token: string
}

const initialState = {
  qrcode: undefined,
  secret: undefined,
  token: '',
}

const UserForm2FA = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const [state, setState] = useState<State>(initialState)

  const enableUser2FA = useEnableUser2FA()
  const setupUser2FA = useSetupUser2FA()
  const deleteUser2FA = useDeleteUser2FA()

  const has2FA = Boolean(data?.kc_user[0].user_2fa)

  useEffect(() => {
    if (!loading && !has2FA) {
      setupUser2FA().then((result) => {
        const { qrcode, secret } = result
        setState({ qrcode, secret, token: '' })
      })
    }
  }, [loading, has2FA])

  const handleEnable = async () => {
    if (!state.secret) {
      throw new Error('no secret!')
    }

    await enableUser2FA({
      name: 'Name?',
      secret: state.secret,
      token: state.token,
    })
  }

  const handleDelete = async () => {
    await deleteUser2FA({
      token: state.token,
    })
  }

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  if (has2FA) {
    return (
      <div>
        <h3>Setup 2FA</h3>
        <p>You already have 2FA enabled.</p>

        <Form
          name="UserForm2FA"
          state={state}
          onChange={setState}
          onFinish={handleDelete}
        >
          <Form.Item name="token" label="Token">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>Delete 2FA</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }

  return (
    <div>
      <h3>Setup 2FA</h3>

      <img src={state.qrcode} />
      <pre>
        <code>{state.secret}</code>
      </pre>

      <Form
        name="UserForm2FA"
        state={state}
        onChange={setState}
        onFinish={handleEnable}
      >
        <Form.Item name="token" label="Token">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>Enable 2FA</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserForm2FA }
