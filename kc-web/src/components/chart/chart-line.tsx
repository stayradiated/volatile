import { useRef, useEffect } from 'react'
import { createChart, LineData } from 'lightweight-charts'

type ChartRow = { time: number; value: number }
type ChartConfig = {
  color: string
  data: ChartRow[]
}

type Props = {
  width?: number
  height?: number
  charts: ChartConfig[]
}

const LineChart = (props: Props) => {
  const { width = 1000, height = 300, charts } = props

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!charts || !containerRef.current) {
      return
    }

    const lwchart = createChart(containerRef.current, {
      width,
      height,
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
