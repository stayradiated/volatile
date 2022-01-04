const formatCurrency = (
  value: number | null | undefined,
  mantissa = 2,
): string => {
  if (value == null) {
    return '$-.--'
  }

  const formattedValue = Math.abs(value).toFixed(mantissa).replace(/\d(?=(?:\d{3})+(?!\d))/, '$&,')
  const prefix = (value < 0) ? '-' : ''
  return `${prefix}$${formattedValue}`
}

export { formatCurrency }
