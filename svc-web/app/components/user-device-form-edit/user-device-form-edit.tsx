import { Link } from '@remix-run/react'

import { Form, Input, PrimaryButton } from '../retro-ui'

import type { GetUserDeviceByUidQuery } from '~/graphql/generated'

type Props = {
  userDeviceUid: string
  query: GetUserDeviceByUidQuery
}

const UserDeviceFormEdit = (props: Props) => {
  const { userDeviceUid, query } = props

  const name = query.userDeviceByPk?.name

  return (
    <>
      <h2>Edit Device</h2>
      <Form
        name={`edit-device-${userDeviceUid}`}
        method="post"
        action={`/account/devices/${userDeviceUid}/edit`}
      >
        <Form.Item label="Name" name="name">
          <Input defaultValue={name} />
        </Form.Item>
        <Form.Item>
          <Link to="/devices">Cancel</Link>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { UserDeviceFormEdit }
