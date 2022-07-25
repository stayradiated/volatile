import { useMemo } from 'react'
import { useTable, Column, CellProps } from 'react-table'
import { parseISO, format } from 'date-fns'

import { Card, Table } from '../retro-ui'
import { formatCurrency } from '~/components/format'

import { GetDcaOrderHistoryListQuery } from '~/graphql/generated'

import { DCAOrderHistoryPriceChart } from '../dca-order-history-price-chart'

type DCAOrderHistory = GetDcaOrderHistoryListQuery['kc_dca_order_history'][0]

type Props = {
  dcaOrderUID: string
  query: GetDcaOrderHistoryListQuery
  dateRange: {
    gt: Date,
    lte: Date,
  }
}

const DCAOrderHistoryList = (props: Props) => {
  const { dcaOrderUID, query, dateRange } = props

  // const handleLoadMore = () => {
  //   const nextDateRange = {
  //     lte: new Date(),
  //     gt: subHours(dateRange.gt, 2),
  //   }
  //   fetchMore({
  //     variables: {
  //       gt: formatISO(nextDateRange.gt),
  //       lte: dateRange.gt,
  //     },
  //   })
  //   setDateRange(nextDateRange)
  // }

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrderHistory>> = [
      {
        Header: 'Date',
        accessor: 'created_at',
        Cell: ({ value }) => format(parseISO(value), 'PPpp'),
      },
      {
        Header: 'Offset',
        accessor: 'market_offset',
        Cell: ({ value }) => `${value}%`,
      },
      {
        id: 'price',
        Header: 'Price',
        accessor: (row) => row.market_price * ((100 + row.market_offset) / 100),
        Cell: ({ value }: CellProps<DCAOrderHistory, number>) =>
          formatCurrency(value),
      },
      {
        Header: 'Target Value',
        accessor: 'target_value',
        Cell: ({ value }) => formatCurrency(value),
      },
      {
        Header: 'Available Balance',
        accessor: 'available_balance',
        Cell: ({ value }) => formatCurrency(value),
      },
      {
        id: 'volume',
        Header: 'Volume',
        accessor: (row) =>
          row.value / (row.market_price * ((100 + row.market_offset) / 100)),
        Cell({ row, value }: CellProps<DCAOrderHistory, number>) {
          return row.original.created_order ? value.toFixed(8) : '--'
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

  const dcaOrder = query.kc_dca_order_by_pk!
  const exchange = dcaOrder.exchange.name
  const tradingPair = `${dcaOrder.primary_currency.symbol}-${dcaOrder.secondary_currency.symbol}`

  return (
    <Card width={1200}>
      <h2>
        ☰ DCA Order | {exchange} | {tradingPair}
      </h2>
      {/* <Button onClick={handleLoadMore}>Load More</Button> */}
      {/* <DCAOrderHistoryPriceChart */}
      {/*   dcaOrderUID={dcaOrderUID} */}
      {/*   dcaOrderHistoryList={dcaOrderHistoryList} */}
      {/*   dateRange={dateRange} */}
      {/* /> */}
      <Table table={table} />
    </Card>
  )
}

export { DCAOrderHistoryList }
