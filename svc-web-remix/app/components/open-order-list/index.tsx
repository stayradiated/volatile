import { parseISO, format } from 'date-fns'
import type { Column } from 'react-table'
import { useTable } from 'react-table'

import { Table } from '../retro-ui'

import { formatCurrency } from '~/components/format'

import type { GetOpenOrderListQuery } from '~/graphql/generated'

type Order = GetOpenOrderListQuery['order'][number]

const columns: Array<Column<Order>> = [
  {
    Header: 'Exchange',
    accessor: (row) => row.exchange.name,
  },
  {
    Header: 'Opened At',
    accessor: 'openedAt',
    Cell(props) {
      const { value } = props
      return <>{format(parseISO(value), 'PPpp')}</>
    },
  },
  {
    Header: 'Trading Pair',
    accessor: 'uid',
    Cell(props) {
      const { primaryCurrency, secondaryCurrency } = props.row.original
      return <>{`${primaryCurrency}-${secondaryCurrency}`}</>
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
    Header: 'Dca Order?',
    accessor: 'dcaOrderHistories',
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
    data: query.order ?? [],
  })

  return (
    <>
      {/* <Button onClick={async () => refetch()}>Refresh</Button> */}
      <Table table={table} />
    </>
  )
}

export { OpenOrderList }
