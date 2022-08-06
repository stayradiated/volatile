import { Link } from '@remix-run/react'
import { useMemo } from 'react'
import { useTable, Column } from 'react-table'
import { parseISO, differenceInHours } from 'date-fns'

import { Card, Table, Dropdown } from '../retro-ui'
import { ToggleDCAOrder } from './ToggleDCAOrder'
import { formatCurrency } from '~/components/format'

import type { GetDcaOrderListQuery } from '~/graphql/generated'

type DCAOrder = GetDcaOrderListQuery['dca_order'][0]

type Props = {
  query: GetDcaOrderListQuery
}

const DCAOrderList = (props: Props) => {
  const { query } = props

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrder>> = [
      {
        Header: 'Status',
        accessor: 'enabled_at',
        Cell({ row, value }) {
          const enabledAt = value ?? undefined
          const dcaOrderUID = row.original.uid
          return (
            <ToggleDCAOrder dcaOrderUID={dcaOrderUID} enabledAt={enabledAt} />
          )
        },
      },
      {
        Header: 'Exchange',
        accessor: (row) => row.exchange.name,
      },
      {
        Header: 'Trading Pair',
        accessor(row) {
          return `${row.primary_currency.symbol}-${row.secondary_currency.symbol}`
        },
      },
      {
        Header: 'Market Offset',
        accessor: 'market_offset',
        Cell: ({ value }) => <>{value}$</>,
      },
      {
        Header: 'Daily Average',
        accessor: 'daily_average',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        Header: 'Start At',
        accessor: 'start_at',
        Cell({ value }) {
          return (
            <>
              {(differenceInHours(new Date(), parseISO(value)) / 24).toFixed(
                2,
              ) + ' days'}
            </>
          )
        },
      },
      {
        Header: 'Interval',
        accessor: 'interval_ms',
        Cell: ({ value }) => <>{value / 60 / 1000 + ' min'}</>,
      },
      {
        Header: 'Min Value',
        accessor: 'min_value',
        Cell: ({ value }) => <>{value ? formatCurrency(value) : '$0.00'}</>,
      },
      {
        Header: 'Max Value',
        accessor: 'max_value',
        Cell: ({ value }) => <>{value ? formatCurrency(value) : '∞'}</>,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const { value: dcaOrderUID } = props

          return (
            <Dropdown>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUID}/history`}>
                View
              </Dropdown.Item>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUID}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUID}/delete`}>
                Delete
              </Dropdown.Item>
            </Dropdown>
          )
        },
      },
    ]
    return columns
  }, [])

  const tableData = useMemo(
    () =>
      (query.dca_order ?? []).map((row) => ({
        ...row,
        [Table.DISABLED]: !row.enabled_at,
      })),
    [query],
  )

  const table = useTable({ columns, data: tableData })

  return (
    <>
      <Card width={1000}>
        <h2>☰ DCA Order List</h2>
        <Table table={table} />
        <Link to="/dca-orders/create">Create DCA Order</Link>
      </Card>
    </>
  )
}

export { DCAOrderList }
