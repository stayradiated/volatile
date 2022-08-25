import { useMemo } from 'react'
import { useTable, Column, CellProps } from 'react-table'
import { parseISO, format } from 'date-fns'

import { Table } from '../retro-ui'
import { formatCurrency } from '~/components/format'

import { GetDcaOrderHistoryListQuery } from '~/graphql/generated'

type DcaOrderHistory = GetDcaOrderHistoryListQuery['dcaOrderHistory'][number]

type Props = {
  query: GetDcaOrderHistoryListQuery
}

const DcaOrderHistoryList = (props: Props) => {
  const { query } = props

  const columns = useMemo(() => {
    const columns: Array<Column<DcaOrderHistory>> = [
      {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({ value }) => <>{format(parseISO(value), 'PPpp')}</>,
      },
      {
        Header: 'Offset',
        accessor: 'marketOffset',
        Cell: ({ value }) => <>{value}%</>,
      },
      {
        id: 'price',
        Header: 'Price',
        accessor: (row) => row.marketPrice * ((100 + row.marketOffset) / 100),
        Cell: ({ value }: CellProps<DcaOrderHistory, number>) => (
          <>{formatCurrency(value)}</>
        ),
      },
      {
        Header: 'Target Value',
        accessor: 'targetValue',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        Header: 'Available Balance',
        accessor: 'availableBalance',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        id: 'volume',
        Header: 'Volume',
        accessor: (row) =>
          row.value / (row.marketPrice * ((100 + row.marketOffset) / 100)),
        Cell({ row, value }: CellProps<DcaOrderHistory, number>) {
          return <>{row.original.createdOrder ? value.toFixed(8) : '--'}</>
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ]
    return columns
  }, [])

  const dcaOrderHistoryList = query.dcaOrderHistory ?? []

  const table = useTable({ columns, data: dcaOrderHistoryList })

  return <Table table={table} />
}

export { DcaOrderHistoryList }
