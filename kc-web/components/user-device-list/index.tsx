import { DateTime } from 'luxon'
import { gql, useQuery } from '@apollo/client'
import { Tooltip } from 'antd'

import { GetUserDeviceListQuery } from '../../utils/graphql'

const QUERY = gql`
  query getUserDeviceList {
    kc_user_device {
      uid
      name
      created_at
      accessed_at
      trusted
    }
  }
`
type UserDeviceListItemProps = {
  device: GetUserDeviceListQuery['kc_user_device'][0]
}

const UserDeviceListItem = (props: UserDeviceListItemProps) => {
  const { device } = props

  const createdAt = DateTime.fromISO(device.created_at)
  const accessedAt = DateTime.fromISO(device.accessed_at)

  return (
    <tr>
      <td>{device.name}</td>
      <td>
        <Tooltip title={createdAt.toLocaleString(DateTime.DATETIME_MED)}>
          {createdAt.toRelative()}
        </Tooltip>
      </td>
      <td>
        <Tooltip title={accessedAt.toLocaleString(DateTime.DATETIME_MED)}>
          {accessedAt.toRelative()}
        </Tooltip>
      </td>
      <td>{device.trusted ? 'Trusted' : ''}</td>
    </tr>
  )
}

const UserDeviceList = () => {
  const { data, error } = useQuery<GetUserDeviceListQuery>(QUERY)
  if (error) {
    return <p>{error.message}</p>
  }

  if (!data) {
    return <p>Loading…</p>
  }

  const devices = data.kc_user_device

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>First Login</th>
          <th>Last Login</th>
          <th>Trusted</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <UserDeviceListItem key={device.uid} device={device} />
        ))}
      </tbody>
    </table>
  )
}

export { UserDeviceList }
