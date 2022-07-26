import { Form, PrimaryButton, LinkButton } from '../retro-ui'

import type { GetUserDeviceByUidQuery } from '~/graphql/generated'

type Props = {
  userDeviceUID: string
  query: GetUserDeviceByUidQuery
}

const UserDeviceDelete = (props: Props) => {
  const { userDeviceUID, query } = props

  const name = query.kc_user_device_by_pk?.name

  return (
    <>
      <h2>Delete Device</h2>
      <Form
        name={`edit-device-${userDeviceUID}`}
        method="post"
        action={`/account/devices/${userDeviceUID}/delete`}
      >
        <Form.Item>
          <p>
            Are you sure want to delete <strong>{name}</strong>?
          </p>
        </Form.Item>
        <Form.Item>
          <LinkButton href="/devices">Cancel</LinkButton>
          <PrimaryButton type="submit">Delete</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { UserDeviceDelete }
