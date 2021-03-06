import { gql, useQuery } from '@apollo/client'
import { parseISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'

import { Button, Alert, Spin, Table } from '../retro-ui'

import { formatCurrency } from '../../utils/format'

import type {
  GetOpenOrderListQuery as Query,
  GetOpenOrderListQueryVariables as QueryVariables,
} from '../../utils/graphql'

type Order = Query['kc_order'][0]

const QUERY = gql`
  query getOpenOrderList {
    kc_order(where: { closed_at: { _is_null: true } }) {
      uid
      exchange {
        uid
        name
      }
      opened_at
      value
      volume
      price
      primary_currency
      secondary_currency
      type

      dca_order_histories {
        uid
        dca_order_uid
      }
    }
  }
`

const columns: Array<Column<Order>> = [
  {
    Header: 'Exchange',
    accessor: (row) => row.exchange.name,
  },
  {
    Header: 'Opened At',
    accessor: 'opened_at',
    Cell(props) {
      const { value } = props
      return format(parseISO(value), 'PPpp')
    },
  },
  {
    Header: 'Trading Pair',
    accessor: 'uid',
    Cell(props) {
      const { primary_currency, secondary_currency } = props.row.original
      return `${primary_currency}-${secondary_currency}`
    },
  },
  {
    Header: 'Volume',
    accessor: 'volume',
  },
  {
    Header: 'Value',
    accessor: 'value',
    Cell(props) {
      const { value } = props
      return formatCurrency(value)
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell(props) {
      const { value } = props
      return formatCurrency(value)
    },
  },
  {
    Header: 'DCA Order?',
    accessor: 'dca_order_histories',
    Cell(props) {
      const { value } = props
      return value ? 'Yes' : 'No'
    },
  },
]

const OpenOrderList = () => {
  const { data, loading, error, refetch } = useQuery<Query, QueryVariables>(
    QUERY,
  )

  const table = useTable({
    columns,
    data: data?.kc_order ?? [],
  })

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <>
      <Button onClick={async () => refetch()}>Refresh</Button>
      <Table table={table} />
    </>
  )
}

export { OpenOrderList }
