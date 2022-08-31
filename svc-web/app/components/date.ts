import { differenceInDays, format } from 'date-fns'

const formatRelativeDate = (date: Date, baseDate: Date): string => {
  const delta = differenceInDays(baseDate, date)
  if (delta === 0) {
    return 'Today'
  }

  if (delta === 1) {
    return 'Yesterday'
  }

  if (delta < 7) {
    return format(date, 'iiii')
  }

  return format(date, 'do MMM yyyy')
}

export { formatRelativeDate }
