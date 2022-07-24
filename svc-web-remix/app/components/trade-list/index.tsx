import { parseISO, formatISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'

import { Table, Card } from '../retro-ui'
import { TradeStats } from './stats'
import { GetTradeListQuery } from '~/graphql/generated'

import { formatCurrency } from '~/components/format'
// Import { TradeChart } from './chart'
// Import { ChartWeek } from './chart-week'

type Trade = GetTradeListQuery['kc_trade'][0]

const columns: Array<Column<Trade>> = [
  {
    Header: 'Timestamp',
    accessor: 'timestamp',
    Cell: ({ value }) => format(parseISO(value), 'PPpp'),
  },
  {
    Header: 'Exchange',
    accessor: (row) => row.exchange.id,
  },
  {
    Header: 'Volume',
    accessor: 'volume',
    Cell: ({ value }) => value.toFixed(8),
  },
  {
    Header: 'Asset',
    accessor: 'primary_currency',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ value }) => formatCurrency(value ?? undefined),
  },
  {
    Header: 'Currency',
    accessor: 'secondary_currency',
  },
  {
    Header: 'Total Value',
    accessor: 'total_value',
    Cell: ({ value }) => formatCurrency(value ?? undefined),
  },
  {
    Header: 'Fee',
    accessor: 'fee',
    Cell: ({ value }) => formatCurrency(value ?? undefined),
  },
]

type TradeListProps = {
  query: GetTradeListQuery
}

const TradeList = (props: TradeListProps) => {
  const { query } = props

  const table = useTable<Trade>({
    columns,
    data: query.kc_trade ?? [],
  })

  const agg = query.kc_trade_aggregate?.aggregate

  return (
    <Card width={1200}>
      <TradeStats
        sumValue={agg?.sum?.value ?? 0}
        sumVolume={agg?.sum?.volume ?? 0}
        sumFee={agg?.sum?.fee ?? 0}
        minTimestamp={parseISO(agg?.min?.timestamp ?? formatISO(new Date()))}
        maxTimestamp={parseISO(agg?.max?.timestamp ?? formatISO(new Date()))}
      />

      <Table table={table} />
    </Card>
  )
}

export { TradeList }
