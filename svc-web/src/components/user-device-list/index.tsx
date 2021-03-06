import { parseISO, format } from 'date-fns'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { useMemo } from 'react'

import { Spin, Alert, Table, Dropdown } from '../retro-ui'

import type { GetUserDeviceListQuery } from '../../utils/graphql'
import { useDeleteUserDevice } from './mutation-delete'

type Device = GetUserDeviceListQuery['kc_user_device'][0]

const QUERY = gql`
  query getUserDeviceList {
    kc_user_device(order_by: { accessed_at: desc }) {
      uid
      name
      created_at
      accessed_at
    }
  }
`

type Props = {
  onEdit?: (userDeviceUID: string) => void
}

const UserDeviceList = (props: Props) => {
  const { onEdit } = props

  const { data, loading, error } = useQuery<GetUserDeviceListQuery>(QUERY)

  const deleteUserDevice = useDeleteUserDevice()

  const columns = useMemo(() => {
    const columns: Array<Column<Device>> = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Last Login At',
        accessor: 'accessed_at',
        Cell(props) {
          const { value } = props
          const date = parseISO(value)
          return format(date, 'PPpp')
        },
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const { value } = props
          const handleEdit = () => {
            if (typeof onEdit === 'function') {
              onEdit(value)
            }
          }

          const handleDelete = () => {
            deleteUserDevice(value)
          }

          return (
            <Dropdown>
              <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
            </Dropdown>
          )
        },
      },
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: data?.kc_user_device ?? [],
  })

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return <Table table={table} />
}

export { UserDeviceList }
