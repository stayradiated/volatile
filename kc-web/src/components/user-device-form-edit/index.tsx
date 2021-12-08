import { gql, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'

import { Form, Input, Button } from '../retro-ui'

import type {
  GetUserDeviceByUidQuery,
  GetUserDeviceByUidQueryVariables,
} from '../../utils/graphql'
import { useUpdateUserDevice } from './mutation'

const QUERY = gql`
  query getUserDeviceByUID($userDeviceUID: uuid!) {
    kc_user_device_by_pk(uid: $userDeviceUID) {
      uid
      name
    }
  }
`

type Props = {
  userDeviceUID: string
}

const UserDeviceFormEdit = (props: Props) => {
  const { userDeviceUID } = props

  const updateUserDevice = useUpdateUserDevice()

  const { data, loading } = useQuery<
    GetUserDeviceByUidQuery,
    GetUserDeviceByUidQueryVariables
  >(QUERY, {
    variables: {
      userDeviceUID,
    },
  })

  const [state, setState] = useState({
    name: '',
  })

  useEffect(() => {
    if (data?.kc_user_device_by_pk) {
      setState({
        name: data?.kc_user_device_by_pk.name,
      })
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  const handleFinish = async () => {
    await updateUserDevice({
      userDeviceUID,
      name: state.name,
    })
  }

  return (
    <>
      <h2>Edit Device</h2>
      <Form
        name={`edit-device-${userDeviceUID}`}
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="link" htmlType="button">
            Cancel
          </Button>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export { UserDeviceFormEdit }
