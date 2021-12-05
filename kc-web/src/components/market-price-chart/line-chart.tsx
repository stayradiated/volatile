import { useRef, useEffect } from 'react'
import { createChart, LineData } from 'lightweight-charts'

type ChartRow = { time: number; value: number }
type ChartData = ChartRow[]

type Props = {
  data: ChartData
}

const LineChart = (props: Props) => {
  const { data } = props

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data || !containerRef.current) {
      return
    }

    const chart = createChart(containerRef.current, {
      width: 960,
      height: 300,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    })

    // TODO: fix incorrect types for lightweight-charts
    chart.addLineSeries().setData(data as unknown as LineData[])
    chart.timeScale().fitContent()

    return () => {
      console.log('removing chart')
      chart.remove()
    }
  }, [data])

  return <div ref={containerRef} />
}

export { LineChart }
