import { parseISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'

import { Table } from '../retro-ui'

import { formatCurrency } from '~/components/format'

import type { GetOpenOrderListQuery } from '~/graphql/generated'

type Order = GetOpenOrderListQuery['kc_order'][0]

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
      return <>{format(parseISO(value), 'PPpp')}</>
    },
  },
  {
    Header: 'Trading Pair',
    accessor: 'uid',
    Cell(props) {
      const { primary_currency, secondary_currency } = props.row.original
      return <>{`${primary_currency}-${secondary_currency}`}</>
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
      return <>{formatCurrency(value)}</>
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
      return <>{formatCurrency(value)}</>
    },
  },
  {
    Header: 'DCA Order?',
    accessor: 'dca_order_histories',
    Cell(props) {
      const { value } = props
      return <>{value ? 'Yes' : 'No'}</>
    },
  },
]

type Props = {
  query: GetOpenOrderListQuery
}

const OpenOrderList = (props: Props) => {
  const { query } = props

  const table = useTable({
    columns,
    data: query.kc_order ?? [],
  })

  return (
    <>
      {/* <Button onClick={async () => refetch()}>Refresh</Button> */}
      <Table table={table} />
    </>
  )
}

export { OpenOrderList }
