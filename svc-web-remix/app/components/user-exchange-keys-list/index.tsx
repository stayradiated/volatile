import { Link } from '@remix-run/react'
import { useMemo } from 'react'
import { useTable, Column } from 'react-table'
import { parseISO } from 'date-fns'
import { formatToTimeZone } from 'date-fns-timezone'

import { Table, Dropdown } from '../retro-ui'

import type { GetUserExchangeKeysListQuery } from '~/graphql/generated'

type UserExchangeKeys = GetUserExchangeKeysListQuery['user_exchange_keys'][0]

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
        accessor: 'updated_at',
        Cell(props) {
          const { value } = props
          return <>{formatToTimeZone(parseISO(value), 'PPpp', { timeZone })}</>
        },
      },
      {
        Header: '# DCA Orders',
        accessor: (row) => row.dca_orders_aggregate.aggregate?.count,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const userExchangeKeysUID = props.value

          return (
            <Dropdown>
              <Dropdown.Item to={`/settings/${userExchangeKeysUID}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/settings/${userExchangeKeysUID}/validate`}>
                Validate
              </Dropdown.Item>
              <Dropdown.Item to={`/settings/${userExchangeKeysUID}/delete`}>
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
    data: query.user_exchange_keys ?? [],
  })

  return (
    <>
      <Table table={table} />
      <Link to="/settings/create">Add API Keys</Link>

      {/* <UserExchangeKeysModalDelete */}
      {/*   isOpen={Boolean(deleteState)} */}
      {/*   userExchangeKeysUID={deleteState ?? ''} */}
      {/*   onCancel={handleCloseDeleteModal} */}
      {/*   onFinish={handleCloseDeleteModal} */}
      {/* /> */}
    </>
  )
}

export { UserExchangeKeysList }
