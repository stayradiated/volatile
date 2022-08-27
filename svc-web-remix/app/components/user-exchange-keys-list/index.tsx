import { Link } from '@remix-run/react'
import { useMemo } from 'react'
import type { Column } from 'react-table'
import { useTable } from 'react-table'
import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

import { Table, Dropdown } from '../retro-ui'

import type { GetUserExchangeKeysListQuery } from '~/graphql/generated'

type UserExchangeKeys = GetUserExchangeKeysListQuery['userExchangeKeys'][number]

type Props = {
  query: GetUserExchangeKeysListQuery
}

const UserExchangeKeysList = (props: Props) => {
  const { query } = props

  const timeZone = query.user[0].timezone

  const columns = useMemo(() => {
    const columns: Array<Column<UserExchangeKeys>> = [
      { Header: 'Exchange', accessor: (row) => row.exchange.name },
      { Header: 'Keys', accessor: 'description' },
      {
        Header: 'Last Modified',
        accessor: 'updatedAt',
        Cell(props) {
          const { value } = props
          return <>{formatInTimeZone(parseISO(value), timeZone, 'PPpp')}</>
        },
      },
      {
        Header: '# Dca Orders',
        accessor: (row) => row.dcaOrdersAggregate.aggregate?.count,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const userExchangeKeysUid = props.value

          return (
            <Dropdown>
              <Dropdown.Item to={`/settings/${userExchangeKeysUid}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/settings/${userExchangeKeysUid}/validate`}>
                Validate
              </Dropdown.Item>
              <Dropdown.Item to={`/settings/${userExchangeKeysUid}/delete`}>
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
    data: query.userExchangeKeys ?? [],
  })

  return (
    <>
      <Table table={table} />
      <Link to="/settings/create">Add API Keys</Link>

      {/* <UserExchangeKeysModalDelete */}
      {/*   isOpen={Boolean(deleteState)} */}
      {/*   userExchangeKeysUid={deleteState ?? ''} */}
      {/*   onCancel={handleCloseDeleteModal} */}
      {/*   onFinish={handleCloseDeleteModal} */}
      {/* /> */}
    </>
  )
}

export { UserExchangeKeysList }
