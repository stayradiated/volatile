import { useRef, useEffect } from 'react'
import type {
  DeepPartial,
  ChartOptions,
  AreaSeriesOptions,
  LineData,
  LineSeriesOptions,
  HistogramSeriesOptions,
  HistogramData,
} from 'lightweight-charts'
import { createChart } from 'lightweight-charts'

type AlternateLineData = { time: number; value: number }

type AreaChartConfig = {
  type: 'area'
  options: Partial<AreaSeriesOptions>
  data: LineData[] | AlternateLineData[]
}

type LineChartConfig = {
  type: 'line'
  options: Partial<LineSeriesOptions>
  data: LineData[] | AlternateLineData[]
}

type HistogramChartConfig = {
  type: 'histogram'
  options: Partial<HistogramSeriesOptions>
  data: HistogramData[] | AlternateLineData[]
}

type ChartConfig = AreaChartConfig | LineChartConfig | HistogramChartConfig

type ChartProps = {
  width?: number
  height?: number
  config?: DeepPartial<ChartOptions>
  charts: ChartConfig[]
}

const Chart = (props: ChartProps) => {
  const { width = 1000, height = 300, config, charts } = props

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
      ...config,
    })

    for (const config of charts) {
      switch (config.type) {
        case 'area':
          lwchart
            .addAreaSeries(config.options)
            .setData(config.data as unknown as LineData[])
          break
        case 'line':
          lwchart
            .addLineSeries(config.options)
            .setData(config.data as unknown as LineData[])
          break
        case 'histogram':
          lwchart
            .addHistogramSeries(config.options)
            .setData(config.data as unknown as HistogramData[])
          break
      }
    }

    lwchart.timeScale().fitContent()

    return () => {
      lwchart.remove()
    }
  }, [charts])

  return <div ref={containerRef} />
}

export { Chart }
export type { ChartProps, ChartConfig }
