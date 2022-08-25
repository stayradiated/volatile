import { parseISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'
import { useMemo } from 'react'

import { Table, Dropdown } from '../retro-ui'

import type { GetUserDeviceListQuery } from '~/graphql/generated'

type Device = GetUserDeviceListQuery['userDevice'][number]

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
        accessor: 'accessedAt',
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
          const { value: userDeviceUid } = props

          return (
            <Dropdown>
              <Dropdown.Item to={`/account/devices/${userDeviceUid}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/account/devices/${userDeviceUid}/delete`}>
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
    data: query.userDevice ?? [],
  })

  return <Table table={table} />
}

export { UserDeviceList }
