import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Alert, Spin } from '../retro-ui'
import { Chart, formatDataForChart } from '../chart'

import {
  GetDcaOrderHistoryPriceChartQuery as Query,
  GetDcaOrderHistoryPriceChartQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query getDCAOrderHistoryPriceChart($dcaOrderUID: uuid!) {
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      market_prices(order_by: { timestamp: desc }, limit: 400) {
        price
        timestamp
      }
    }

    kc_dca_order_history(
      where: { dca_order_uid: { _eq: $dcaOrderUID } }
      order_by: { created_at: desc }
    ) {
      uid
      created_at
      market_price
      market_offset
    }
  }
`

type Props = {
  dcaOrderUID: string
}

const DCAOrderHistoryPriceChart = (props: Props) => {
  const { dcaOrderUID } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      dcaOrderUID,
    },
  })

  const charts = useMemo(() => {
    return [
      {
        color: 'blue',
        data: formatDataForChart({
          data: data?.kc_dca_order_history ?? [],
          getValue: (row) =>
            row.market_price * ((100 + row.market_offset) / 100),
          getTime: (row) => row.created_at,
        }),
      },
      {
        color: 'red',
        data: formatDataForChart({
          data: data?.kc_dca_order_by_pk?.market_prices ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
    ]
  }, [data])

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return <Chart.Line width={1160} charts={charts} />
}

export { DCAOrderHistoryPriceChart }
