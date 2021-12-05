import { parseISO, format } from 'date-fns'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { useMemo } from 'react'

import { Table, Button } from '../retro-ui'

import { useDeleteUserDevice } from './mutation-delete'

import type { GetUserDeviceListQuery } from '../../utils/graphql'

type Device = GetUserDeviceListQuery['kc_user_device'][0]

const QUERY = gql`
  query getUserDeviceList {
    kc_user_device(order_by: { accessed_at: desc}) {
      uid
      name
      created_at
      accessed_at
    }
  }
`

type Props = {
  onEdit?: (userDeviceUID: string) => void,
}

const UserDeviceList = (props: Props) => {
  const { onEdit } = props

  const { data, error } = useQuery<GetUserDeviceListQuery>(QUERY)

  const deleteUserDevice = useDeleteUserDevice()

  const columns = useMemo(() => {
    const columns: Column<Device>[] = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'First Login',
        accessor: 'created_at',
        Cell: (props) => {
          const { value } = props
          const date = parseISO(value)
          return format(date, 'PPpp')
        }
      },
      {
        Header: 'Last Login',
        accessor: 'accessed_at',
        Cell: (props) => {
          const { value } = props
          const date = parseISO(value)
          return format(date, 'PPpp')
        }
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell: (props) => {
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
            <>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={handleDelete}>Delete</Button>
            </>
          )
        }
      }
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: data?.kc_user_device ?? []
  })

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Table table={table} />
  )
}

export { UserDeviceList }
