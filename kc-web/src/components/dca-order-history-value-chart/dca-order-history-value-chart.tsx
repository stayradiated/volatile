import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Alert, Spin } from '../retro-ui'
import { Chart, formatDataForChart } from '../chart'

import {
  GetDcaOrderHistoryValueChartQuery as Query,
  GetDcaOrderHistoryValueChartQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query getDCAOrderHistoryValueChart($dcaOrderUID: uuid!) {
    kc_dca_order_history(
      where: { dca_order_uid: { _eq: $dcaOrderUID } }
      order_by: { created_at: desc }
    ) {
      uid
      created_at
      value
      available_balance
    }
  }
`

type Props = {
  dcaOrderUID: string
}

const DCAOrderHistoryValueChart = (props: Props) => {
  const { dcaOrderUID } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      dcaOrderUID,
    },
  })

  const charts = useMemo(() => {
    return [
      {
        color: 'black',
        data: formatDataForChart({
          data: data?.kc_dca_order_history ?? [],
          getValue: (row) => row.value!,
          getTime: (row) => row.created_at,
        }),
      },
      {
        color: 'orange',
        data: formatDataForChart({
          data: data?.kc_dca_order_history ?? [],
          getValue: (row) => row.available_balance,
          getTime: (row) => row.created_at,
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

  return <Chart.Line width={1160} height={100} charts={charts} />
}

export { DCAOrderHistoryValueChart }
