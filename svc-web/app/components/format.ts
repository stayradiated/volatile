const formatCurrency = (value: number | undefined, mantissa = 2): string => {
  if (typeof value !== 'number') {
    return '$-.--'
  }

  const formattedValue = Math.abs(value)
    .toFixed(mantissa)
    .replace(/\d(?=(?:\d{3})+(?!\d))/g, '$&,')
  const prefix = value < 0 ? '-' : ''
  return `${prefix}$${formattedValue}`
}

export { formatCurrency }
