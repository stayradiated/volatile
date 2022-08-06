import { parseISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'
import { useMemo } from 'react'

import { Table, Dropdown } from '../retro-ui'

import type { GetUserDeviceListQuery } from '~/graphql/generated'

type Device = GetUserDeviceListQuery['user_device'][0]

type Props = {
  query: GetUserDeviceListQuery
}

const UserDeviceList = (props: Props) => {
  const { query } = props

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
          return <>{format(date, 'PPpp')}</>
        },
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const { value: userDeviceUID } = props

          return (
            <Dropdown>
              <Dropdown.Item to={`/account/devices/${userDeviceUID}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/account/devices/${userDeviceUID}/delete`}>
                Delete
              </Dropdown.Item>
            </Dropdown>
          )
        },
      },
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: query.user_device ?? [],
  })

  return <Table table={table} />
}

export { UserDeviceList }
