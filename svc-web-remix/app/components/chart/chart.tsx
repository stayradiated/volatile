import { ClientOnly } from 'remix-utils'

import { Chart as ClientChart, ChartProps } from './chart.client'

const ServerChart = (props: ChartProps) => {
  const { width = 1000, height = 300 } = props

  return <div style={{ width, height, background: '#fff' }} />
}

const Chart = (props: ChartProps) => {
  return (
    <ClientOnly fallback={<ServerChart {...props} />}>
      {() => <ClientChart {...props} />}
    </ClientOnly>
  )
}

export { Chart }

export { type ChartConfig, type ChartProps } from './chart.client'
