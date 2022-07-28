import { useMemo } from 'react'
import { useTable, Column, CellProps } from 'react-table'
import { parseISO, format } from 'date-fns'

import { Table } from '../retro-ui'
import { formatCurrency } from '~/components/format'

import { GetDcaOrderHistoryListQuery } from '~/graphql/generated'

type DCAOrderHistory = GetDcaOrderHistoryListQuery['kc_dca_order_history'][0]

type Props = {
  query: GetDcaOrderHistoryListQuery
}

const DCAOrderHistoryList = (props: Props) => {
  const { query } = props

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrderHistory>> = [
      {
        Header: 'Date',
        accessor: 'created_at',
        Cell: ({ value }) => <>{format(parseISO(value), 'PPpp')}</>,
      },
      {
        Header: 'Offset',
        accessor: 'market_offset',
        Cell: ({ value }) => <>{value}%</>,
      },
      {
        id: 'price',
        Header: 'Price',
        accessor: (row) => row.market_price * ((100 + row.market_offset) / 100),
        Cell: ({ value }: CellProps<DCAOrderHistory, number>) => (
          <>{formatCurrency(value)}</>
        ),
      },
      {
        Header: 'Target Value',
        accessor: 'target_value',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        Header: 'Available Balance',
        accessor: 'available_balance',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        id: 'volume',
        Header: 'Volume',
        accessor: (row) =>
          row.value / (row.market_price * ((100 + row.market_offset) / 100)),
        Cell({ row, value }: CellProps<DCAOrderHistory, number>) {
          return <>{row.original.created_order ? value.toFixed(8) : '--'}</>
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ]
    return columns
  }, [])

  const dcaOrderHistoryList = query.kc_dca_order_history ?? []

  const table = useTable({ columns, data: dcaOrderHistoryList })

  return <Table table={table} />
}

export { DCAOrderHistoryList }
