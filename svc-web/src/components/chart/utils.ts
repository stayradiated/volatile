import {
  parseISO,
  eachMinuteOfInterval,
  eachHourOfInterval,
  eachDayOfInterval,
  eachWeekOfInterval,
} from 'date-fns'

type FormatDataForChartOptions<T> = {
  interval?: 'minute' | 'hour' | 'day' | 'week'
  data: T[]
  getValue: (item: T) => number | undefined
  getTime: (item: T) => string
}

const formatDataForChart = <T>(options: FormatDataForChartOptions<T>) => {
  const { interval = 'minute', data, getValue, getTime } = options

  if (data.length === 0) {
    return []
  }

  const endDate = parseISO(getTime(data[0]))
  const startDate = parseISO(getTime(data[data.length - 1]))

  console.log(startDate, endDate)

  const eachInterval = (() => {
    switch (interval) {
      case 'minute':
        return eachMinuteOfInterval
      case 'hour':
        return eachHourOfInterval
      case 'day':
        return eachDayOfInterval
      case 'week':
        return eachWeekOfInterval
    }
  })()

  const map = new Map<number, any>(
    eachInterval({ start: startDate, end: endDate }).map((date) => {
      return [date.getTime() / 1000, undefined]
    }),
  )

  for (const row of data) {
    const time = parseISO(getTime(row)).getTime() / 1000
    map.set(time, getValue(row))
  }

  const results = [...map.entries()]
    .map((row) => {
      return { time: row[0], value: row[1] }
    })
    .sort((a, b) => a.time - b.time)

  let lastValue: undefined | number
  for (const row of results) {
    if (typeof row.value === 'undefined') {
      row.value = lastValue
    } else {
      lastValue = row.value
    }
  }

  return results.filter((row) => {
    return typeof row.value !== 'undefined'
  })
}

export { formatDataForChart }
