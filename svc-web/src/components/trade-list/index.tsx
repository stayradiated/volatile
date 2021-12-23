import { gql, useQuery } from '@apollo/client'
import { parseISO, formatISO, format } from 'date-fns'
import { useTable, Column } from 'react-table'

import {
  GetTradeListQuery,
  GetTradeListQueryVariables,
} from '../../utils/graphql'

import { Alert, Table, Card } from '../retro-ui'

import { formatCurrency } from '../../utils/format'
import { TradeChart } from './chart'
import { TradeStats } from './stats'
import { ChartWeek } from './chart-week'
import { TradeAvgPrice } from './trade-avg-price'

type Trade = GetTradeListQuery['kc_trade'][0]

const QUERY = gql`
  query getTradeList(
    $filters: kc_trade_bool_exp!
    $offset: Int!
    $limit: Int!
  ) {
    kc_trade_aggregate(where: $filters) {
      aggregate {
        count
        sum {
          value
          volume
          fee
        }
        min {
          timestamp
        }
        max {
          timestamp
        }
      }
    }
    kc_trade(
      where: $filters
      order_by: { timestamp: desc }
      limit: $limit
      offset: $offset
    ) {
      uid
      exchange {
        uid
        id
      }
      timestamp
      value
      volume
      primary_currency
      secondary_currency
      type
      price: price_fx(args: {currency: "NZD"})
      total_value: total_value_fx(args: {currency: "NZD"})
      fee: fee_fx(args: {currency: "NZD"})
    }
  }
`

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
    Cell: ({ value }) => '$' + formatCurrency(value!),
  },
  {
    Header: 'Currency',
    accessor: 'secondary_currency',
  },
  {
    Header: 'Total Value',
    accessor: 'total_value',
    Cell: ({ value }) => '$' + formatCurrency(value!),
  },
  {
    Header: 'Fee',
    accessor: 'fee',
    Cell: ({ value }) => '$' + formatCurrency(value!),
  },
]

type TradeListProps = {
  exchangeUID?: string
  startDate?: string
  endDate?: string
  primaryCurrency?: string
  secondaryCurrency?: string
}

const TradeList = (props: TradeListProps) => {
  const {
    exchangeUID,
    startDate,
    endDate,
    primaryCurrency,
    secondaryCurrency,
  } = props

  const { data, error } = useQuery<
    GetTradeListQuery,
    GetTradeListQueryVariables
  >(QUERY, {
    variables: {
      offset: 0,
      limit: 100,
      filters: {
        timestamp: { _gte: startDate, _lte: endDate },
        exchange_uid: {
          _eq: exchangeUID,
        },
        primary_currency: {
          _eq: primaryCurrency,
        },
        secondary_currency: {
          _eq: secondaryCurrency,
        },
      },
    },
  })

  const table = useTable<Trade>({
    columns,
    data: data?.kc_trade ?? [],
  })

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const agg = data?.kc_trade_aggregate?.aggregate

  return (
    <Card width={1200}>
      <TradeAvgPrice
        primaryCurrency={primaryCurrency}
      />

      <ChartWeek
        primaryCurrency={primaryCurrency}
      />

      <TradeStats
        sumValue={agg?.sum?.value ?? 0}
        sumVolume={agg?.sum?.volume ?? 0}
        sumFee={agg?.sum?.fee ?? 0}
        minTimestamp={parseISO(agg?.min?.timestamp ?? formatISO(new Date()))}
        maxTimestamp={parseISO(agg?.max?.timestamp ?? formatISO(new Date()))}
      />
      <TradeChart data={data?.kc_trade ?? []} />

      <Table table={table} />
    </Card>
  )
}

export { TradeList }
