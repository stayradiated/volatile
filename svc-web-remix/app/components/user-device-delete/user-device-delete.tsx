import { Link } from '@remix-run/react'
import { Form, PrimaryButton } from '../retro-ui'

import type { GetUserDeviceByUidQuery } from '~/graphql/generated'

type Props = {
  userDeviceUid: string
  query: GetUserDeviceByUidQuery
}

const UserDeviceDelete = (props: Props) => {
  const { userDeviceUid, query } = props

  const name = query.userDeviceByPk?.name

  return (
    <>
      <h2>Delete Device</h2>
      <Form
        name={`edit-device-${userDeviceUid}`}
        method="post"
        action={`/account/devices/${userDeviceUid}/delete`}
      >
        <Form.Item>
          <p>
            Are you sure want to delete <strong>{name}</strong>?
          </p>
        </Form.Item>
        <Form.Item>
          <Link to="/devices">Cancel</Link>
          <PrimaryButton type="submit">Delete</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { UserDeviceDelete }
