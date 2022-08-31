import { Link } from '@remix-run/react'
import { useMemo } from 'react'
import type { Column } from 'react-table'
import { useTable } from 'react-table'
import { parseISO, differenceInHours } from 'date-fns'

import { ToggleDcaOrder } from './toggle-dca-order'
import { Table, Dropdown } from '~/components/retro-ui'
import { formatCurrency } from '~/components/format'

import type { GetDcaOrderListQuery } from '~/graphql/generated'

type DcaOrder = GetDcaOrderListQuery['dcaOrder'][number]

type Props = {
  query: GetDcaOrderListQuery
}

const DcaOrderList = (props: Props) => {
  const { query } = props

  const columns = useMemo(() => {
    const columns: Array<Column<DcaOrder>> = [
      {
        Header: 'Status',
        accessor: 'enabledAt',
        Cell({ row, value }) {
          const enabledAt = value ?? undefined
          const dcaOrderUid = row.original.uid
          return (
            <ToggleDcaOrder dcaOrderUid={dcaOrderUid} enabledAt={enabledAt} />
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
          return `${row.primaryCurrency.symbol}-${row.secondaryCurrency.symbol}`
        },
      },
      {
        Header: 'Market Offset',
        accessor: 'marketOffset',
        Cell: ({ value }) => <>{value}$</>,
      },
      {
        Header: 'Daily Average',
        accessor: 'dailyAverage',
        Cell: ({ value }) => <>{formatCurrency(value)}</>,
      },
      {
        Header: 'Start At',
        accessor: 'startAt',
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
        accessor: 'intervalMs',
        Cell: ({ value }) => <>{value / 60 / 1000 + ' min'}</>,
      },
      {
        Header: 'Min Value',
        accessor: 'minValue',
        Cell: ({ value }) => <>{value ? formatCurrency(value) : '$0.00'}</>,
      },
      {
        Header: 'Max Value',
        accessor: 'maxValue',
        Cell: ({ value }) => <>{value ? formatCurrency(value) : '∞'}</>,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const { value: dcaOrderUid } = props

          return (
            <Dropdown>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUid}/history`}>
                View
              </Dropdown.Item>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUid}/edit`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item to={`/dca-orders/${dcaOrderUid}/delete`}>
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
      (query.dcaOrder ?? []).map((row) => ({
        ...row,
        [Table.DISABLED]: !row.enabledAt,
      })),
    [query],
  )

  const table = useTable({ columns, data: tableData })

  return (
    <>
      <Table table={table} />
      <Link to="/dca-orders/create">Create Dca Order</Link>
    </>
  )
}

export { DcaOrderList }
