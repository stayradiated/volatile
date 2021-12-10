import { useRef, useEffect } from 'react'
import { createChart, LineData } from 'lightweight-charts'

type ChartRow = { time: number; value: number }
type ChartConfig = {
  color: string
  data: ChartRow[]
}

type Props = {
  charts: ChartConfig[]
}

const LineChart = (props: Props) => {
  const { charts } = props

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!charts || !containerRef.current) {
      return
    }

    const lwchart = createChart(containerRef.current, {
      width: 960,
      height: 300,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    })

    for (const config of charts) {
      // TODO: fix incorrect types for lightweight-charts
      lwchart
        .addLineSeries({ color: config.color })
        .setData(config.data as unknown as LineData[])
    }

    lwchart.timeScale().fitContent()

    return () => {
      lwchart.remove()
    }
  }, [charts])

  return <div ref={containerRef} />
}

export { LineChart }
